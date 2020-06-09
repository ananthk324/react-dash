import React from 'react';

export default [
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
        Header: <div>NO OF ORDERS<i className="fa fa-sort"></i></div>,
        accessor: 'num',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },
    {
        Header: <div>CASHFLOW GENERATED<i className="fa fa-sort"></i></div>,
        accessor: 'profit',
        Cell: row => {
            return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
            )
        }
    },
    {
        Header: <div>AMOUNT PAID OUT<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },
    {
        Header: <div>LAST PAID ON<i className="fa fa-sort"></i></div>,
        accessor: 'placed_date',
    },
];