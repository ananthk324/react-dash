import React from 'react';

export default [
    {
        Header: 'ORDER ID',
        accessor: 'order_id',
        disableSortBy: true,
    },
    {
        Header: <div>FOODIES<i className="fa fa-sort"></i></div>,
        accessor: 'user.name',
        Cell: row => {
            return (
                <div className="cell-container">
                    <img className="cell-data-image" src={row.row.original.user.image} />
                    <div>
                      <span className="cell-data-name">{row.row.original.user.name}</span>
                      <span className="cell-data-username">{row.row.original.user.username}</span>
                    </div>
                </div>
            )
        }
    },
    {
        Header: <div>CHEFS<i className="fa fa-sort"></i></div>,
        accessor: 'user1.name',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.row.original.user1.image} />
              <div>
                <span className="cell-data-name">{row.row.original.user1.name}</span>
                <span className="cell-data-username">{row.row.original.user1.username}</span>
              </div>
            </div>
          )
        }
    },
    {
        Header: <div>STATUS<i className="fa fa-sort"></i></div>,
        accessor: 'status_case',
        Cell: row => {
            return (
              <div className="cell-data">{row.value}</div>
            )
          }
    },
    {
        Header: <div>CASHFLOW<i className="fa fa-sort"></i></div>,
        accessor: 'profit',
        Cell: row => {
            return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
            )
        }
    },
    {
        Header: <div>PAYOUTS<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },
];