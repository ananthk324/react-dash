import React from 'react';

export default [
    {
      Header: 'FOODIES',
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
        Header: 'PHONE',
        accessor: 'phone'
      },
      {
        Header: 'LOCATION',
        accessor: 'location',
      }, 
      {
        Header: 'NO OF ORDERS',
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
      },

       {
      Header: 'ZYMMO TAGS',
      accessor: 'zymmo_tags',
    },
    {
        Header: 'STATUS',
        accessor: 'status_block',
        Cell: row => {
            return (
              <div className={`cell-data${(row.value === 'Blocked') ? 
              " red" : ''}`}>{row.value}</div>
            )
          }
      }
];