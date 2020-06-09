import React from 'react';

export default [
    {
        Header: <div>DISHES<i className="fa fa-sort"></i></div>,
        accessor: 'dishes.name',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.row.original.dishes.image} />
              <div>
                <span className="cell-data-name">{row.row.original.dishes.dish}</span>
                <span className="cell-data-username">{row.row.original.dishes.ingredient}</span>
              </div>
            </div>
          )
        }
    }, 
    {
        Header: 'ALLERGENS',
        accessor: 'allergens',
        disableSortBy: true
    }, 
    {
        Header: 'QUANTITY',
        accessor: 'quantity',
        disableSortBy: true
    }, 
    {
        Header: <div>AMOUNT<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
    }
];