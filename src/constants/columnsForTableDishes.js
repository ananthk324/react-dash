import React from 'react';

export default [
    {
      Header: 'DISHES',
      accessor: 'dishes',
      Cell: row => {
        return (
          <div className="cell-container">
            <img className="cell-data-image" src={row.value.image} />
            <div>
              <span className="cell-data-name">{row.value.dish}</span>
              <span className="cell-data-username">{row.value.ingredient}</span>
            </div>
          </div>
        )
      }
    }, {
      Header: 'ALLERGENS',
      accessor: 'allergens',
    }, {
      Header: 'QUANTITY',
      accessor: 'quantity',
    }, {
      Header: 'AMOUNT',
      accessor: 'amount',
    }
];