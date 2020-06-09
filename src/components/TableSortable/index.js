import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import ExportExcelButton from '../ExportExcelButton';
import './TableSortable.css';

const TableSortable = ({ columns, data, rowHighlight = false }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageCount,
        gotoPage,
        state: { pageIndex, pageSize },
    } = useTable(
        { 
            columns, 
            data,
            initialState: { pageIndex: 0, pageSize: 7 } 
        },
        useSortBy,
        usePagination,
    );

    let pages = [];

    for (let i = 1; i <= pageCount; i++ ) pages.push(i);

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
                  {page.map((row, i) => {
                  prepareRow(row)
                  console.log(row)
                  return (
                      <tr {...row.getRowProps()}
                         className={`row-type${
                                rowHighlight && row.values.status_block ? 
                                    (row.values.status_block.toLowerCase() === 'blocked' ? ' red' : '') :
                                    (rowHighlight && row.values.status_case ? 
                                        (row.values.status_case.toLowerCase() === 'case closed' || 
                                        row.values.status_case.toLowerCase() === 'cancelled' || 
                                        row.values.status_case.toLowerCase() === 'refunded' ? ' grey' : 
                                        row.values.status_case.toLowerCase() === 'case opened' ? ' red' : '') : '')
                          }`}>
                      {row.cells.map(cell => {
                          return <td {...cell.getCellProps()} className="table-data-cell">{cell.render('Cell')}</td>
                      })}
                      </tr>
                  )
                  })}
              </tbody>
            </table>
            <div className="pagination-row">
                <div>
                    {   
                        pages.map(page => 
                            <button className={`pagination-btn${page - 1 === pageIndex ? ' current' : ''}`} value={`${page}`} 
                                onClick={(e) => {
                                    const page = parseInt(e.target.value, 10) - 1;
                                    gotoPage(page);
                                    }}>
                            {page}
                            </button>
                        )
                    }
                </div>
                <ExportExcelButton />
            </div>
        </div>
    );
}

export default TableSortable;