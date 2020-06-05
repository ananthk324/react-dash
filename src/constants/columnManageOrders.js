import React from 'react';

export default [
    {
      Header: 'FOODIES',
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
    },
    {
        Header: 'CHEFS',
        accessor: 'user1',
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
      },
      {
        Header: 'ORDER ID',
        accessor: 'order_id',
      },
       {
      Header: 'DATE',
      accessor: 'placed_date',
    }, {
      Header: 'AMOUNT',
      accessor: 'amount',
      Cell: row => {
        return (
          <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
        )
      }
    },
    {
        Header: 'STATUS',
        accessor: 'status_case',
        Cell: row => {
            return (
              <div className={`cell-data${(row.value === 'Cancelled' || row.value === 'Case opened') ? 
              " red" : (row.value === 'Upcoming' ? " green" : '') }`}>{row.value}</div>
            )
          }
      }
];