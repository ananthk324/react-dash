import React from 'react';

export default [
    {
      Header: 'CHEFS',
      accessor: 'user',
      Cell: row => {
        return (
          <div className="cell-container">
            <img className="cell-data-image" src={row.value.image} />
            <div>
              <span className="cell-data-name">{row.value.name}</span>
              <span className="cell-data-username">{row.value.username}</span>
            </div>
          </div>
        )
      }
    }, {
      Header: 'DISHES',
      accessor: 'dishes',
      Cell: row => {
        return (
          <div className="cell-container">
            <img className="cell-data-image" src={row.value.image} />
            <span className="cell-data-dish">{row.value.dish}</span>
          </div>
        )
      }
    }, {
      Header: 'PLACED DATE',
      accessor: 'placed_date',
    }, {
      Header: 'DELIVERY DATE',
      accessor: 'delivery_date',
      Cell: row => {
        return (
          <div className="cell-data-deliverydate">{row.value ? row.value : "-"}</div>
        )
      }
    }, {
      Header: 'STATUS',
      accessor: 'status',
      Cell: row => {
        return (
          <div className={`cell-data-status${(row.value === "Cancelled" || row.value === "Refunded") ? 
          " highlight" : ""}`}>{row.value}</div>
        )
      }
    }
];