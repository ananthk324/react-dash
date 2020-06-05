import React from 'react';
import { useTable, useSortBy } from 'react-table'
import './TableSortable.css';

const TableSortable = ({ columns, data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
            { columns, data },
            useSortBy,
        );

    return (
        <div className="table-sortable-container">
            <table {...getTableProps()} className="table">
              <thead>
                  {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(column => (
                              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table-header-item">{column.render('Header')}</th>
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

export default TableSortable;
