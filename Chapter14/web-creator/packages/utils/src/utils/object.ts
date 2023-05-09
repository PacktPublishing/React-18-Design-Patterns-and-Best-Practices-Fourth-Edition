type DebugData = {
  _DEBUG: string
}

export function parseDebugData(data: DebugData) {
  if (data._DEBUG) {
    return JSON.parse(data._DEBUG)
  }

  return null
}

export function merge(current: any, updates: any) {
  for (const key of Object.keys(updates)) {
    if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object') {
      current[key] = updates[key]
    } else {
      merge(current[key], updates[key])
    }
  }

  return current
}
