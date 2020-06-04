import React from 'react';
import { useTable } from 'react-table'
import './Table.css';

const Table = ({ columns, data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="table-container">
            <table {...getTableProps()} className="table">
              <thead>
                  {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(column => (
                              <th {...column.getHeaderProps()} className="table-header-item">{column.render('Header')}</th>
                          ))}
                      </tr>
                  ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                  prepareRow(row)
                  return (
                      <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                          return <td {...cell.getCellProps()} className="table-data-cell">{cell.render('Cell')}</td>
                      })}
                      </tr>
                  )
                  })}
              </tbody>
            </table>
        </div>
    );
}

export default Table;
