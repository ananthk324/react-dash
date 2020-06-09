import React from 'react';

export default [
    {
        Header: <div>FOODIE<i className="fa fa-sort"></i></div>,
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
        Header: 'DISHES',
        accessor: 'dishes',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.value.image} />
              <span className="cell-data-dish">{row.value.dish}</span>
            </div>
          )
        },
        disableSortBy: true
    }, 
    {
        Header: <div>PLACED DATE<i className="fa fa-sort"></i></div>,
        accessor: 'placed_date',
    }, 
    {
        Header: <div>DELIVERY DATE<i className="fa fa-sort"></i></div>,
        accessor: 'delivery_date',
        Cell: row => {
          return (
            <div className="cell-data-deliverydate">{row.value ? row.value : "-"}</div>
          )
        }
    }, 
    {
        Header: <div>AMOUNT<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value}</div>
          )
        }
    }
];