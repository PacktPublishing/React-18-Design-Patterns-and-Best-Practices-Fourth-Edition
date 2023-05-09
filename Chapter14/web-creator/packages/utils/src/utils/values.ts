import chunk from './chunk'
import is from './is'

export function getEmptyValues(values: any, required: string[] = []) {
  const emptyValues: any = {}

  Object.keys(values).forEach((field: string) => {
    const v = is.String(values[field]) ? values[field].trim() : values[field]

    if (required && required.length === 0 && (v === '' || v === null)) {
      emptyValues[field] = true
    } else if (required && required.includes(field) && (v === '' || v === null)) {
      emptyValues[field] = true
    }
  })

  return !is.EmptyObject(emptyValues) ? emptyValues : false
}

export function getReferenceTitle(
  entry: any,
  systemFields: string[] = ['id', 'createdAt', 'updatedAt', 'status', 'modelName']
): string {
  const entryFields = Object.entries(entry).filter(
    (entryField: any) => !systemFields.includes(entryField[0])
  )

  let title: any = 'Unknown'

  if (entryFields.length > 0) {
    title = entryFields[0][1] || title // eslint-disable-line prefer-destructuring
  }

  return title
}

export function getEntries(data: any, exclude = ['updatedAt']): any {
  if (!data) {
    return null
  }

  const { fields, values } = data
  const systemHead = []
  const systemBody = []
  const head = []
  const body = []
  let entries: any = {}

  if (fields) {
    for (const field of fields) {
      if (!exclude.includes(field.identifier) && field.type !== 'Reference') {
        if (field.isSystem && field.identifier !== 'id') {
          systemHead.push(field.fieldName)
          systemBody.push(field.identifier)
        } else {
          head.push(field.fieldName)
          body.push(field.identifier)
        }

        if (!values) {
          for (const value of field.values) {
            entries[value.entry] = entries[value.entry] || {}
            entries[value.entry][field.identifier] = value.value
          }
        } else {
          entries = values
        }
      }
    }
  }

  return {
    head,
    body,
    systemHead,
    systemBody,
    entries: Object.values(entries)
  }
}

export function getValuesForTable(
  data: any,
  excludeMore?: any,
  orderBy?: any,
  direction?: any,
  chunks?: any
): any {
  if (!data) {
    return null
  }

  direction = direction || 'asc'
  chunks = chunks || 10

  const exclude: any = excludeMore || ['updatedAt']
  const { head, body, entries: rows, systemHead, systemBody } = getEntries(data, exclude)

  if (orderBy) {
    if (direction === 'asc') {
      rows.sort((a: any, b: any) => (a[orderBy] > b[orderBy] ? 1 : -1))
    } else {
      rows.sort((a: any, b: any) => (a[orderBy] < b[orderBy] ? 1 : -1))
    }
  }

  return {
    head: head.concat(systemHead),
    body: body.concat(systemBody),
    rows: chunk(rows, chunks),
    raw: rows,
    total: rows.length
  }
}
