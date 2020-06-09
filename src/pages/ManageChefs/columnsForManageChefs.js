import React from 'react';
import ZymmoTagNo from '../../components/ZymmoTagNo';

export default [
    {
        Header: <div>CHEFS<i className="fa fa-sort"></i></div>,
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
        Header: 'PHONE',
        accessor: 'phone',
        disableSortBy: true
    },
    {
        Header: 'LOCATION',
        accessor: 'location',
        disableSortBy: true
    }, 
    {
        Header: 'ZYMMO TAGS',
        accessor: 'zymmo_tags',
        Cell: row => {
          if (row.value.length > 3) {
            const tags = row.value.slice(0, 3);
            return (
              <div className="zymmo-tags-cell">
                {tags.map(tag => 
                  <div>{tag},</div>
                )}
              <ZymmoTagNo value={row.value.length - 3} />
              </div>
            ) 
          } else {
            return (
              <div className="zymmo-tags-cell">
                {row.value.map(tag => 
                  <div>{tag},</div>
                )}
              </div>
            ) 
          }
        },
        disableSortBy: true
    }, 
    {
        Header: <div>REVENUE<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },
    {
        Header: 'STATUS',
        accessor: 'status_block',
        Cell: row => {
            return (
              <div className={`cell-data${(row.value === 'Blocked') ? 
              " red" : ''}`}>{row.value}</div>
            )
        },
        disableSortBy: true
    }
];