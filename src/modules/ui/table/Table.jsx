import React from 'react'

export const GridTable = ({content, className=''}) => {
    return (
        <table className={"UI-grid-table "+className}>
            {content.map((row, key) => {
                return (
                    <tr key={key} className={key === 0 ? 'UI-first' : ''}>
                        {row.map((cell, key) => {
                            return <td key={key} className={key === 0 ? 'UI-first' : ''}> {cell} </td>
                        })}
                    </tr>
                )
            })}
        </table>
    )
}

export const Table = ({columns, rows, className=''}) => {

    return (
        <div className={'UI-table '+className}>
            <table>
                <tr>
                    {columns.map((value, key) => {
                        return <th key={key}>{value.label}</th>
                    })}
                </tr>
                {rows.map((row, key) => {
                    return (
                        <tr key={key}>
                            {columns.map((col, key) => {
                                return <td key={key}>{row[col.value]}</td>
                            })}
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table