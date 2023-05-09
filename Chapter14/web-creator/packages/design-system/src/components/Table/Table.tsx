import React, { FC, ReactElement } from 'react'

import { CSS } from './Table.styled'

interface IProps {
  label?: string
  total?: number
  data: {
    columns: string[]
    rows: Array<string[] | ReactElement[]>
  }
}

const Table: FC<IProps> = ({ label, total, data }) => (
  <>
    {label && total && (
      <CSS.TableLabel>
        <strong>{label}</strong>: {total}
      </CSS.TableLabel>
    )}
    <CSS.TableBase>
      <CSS.TableHeader>
        <CSS.TableRow className="header">
          {data.columns.map((header, i) => (
            <CSS.TableHeaderCol key={`header-${header}`} className={`header-${i}`}>
              <strong>{header}</strong>
            </CSS.TableHeaderCol>
          ))}
        </CSS.TableRow>
      </CSS.TableHeader>
      <CSS.TableBody>
        {data.rows.map((item, i) => (
          <CSS.TableRow key={`row-${i}`} className={`row-${i}`}>
            {item.map((row, j) => (
              <CSS.TableCol key={`col-${j}`} className={`col-${j}`}>
                {row}
              </CSS.TableCol>
            ))}
          </CSS.TableRow>
        ))}
      </CSS.TableBody>
    </CSS.TableBase>
  </>
)

export default Table
