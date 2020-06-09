import React from 'react';
import ZymmoTagNo from '../../components/ZymmoTagNo';

export default [
    {
        Header: <div>DISHES<i className="fa fa-sort"></i></div>,
        accessor: 'dishes.dish',
        Cell: row => {
          return (
            <div className="cell-container">
              <img className="cell-data-image" src={row.row.original.dishes.image} />
              <div>
                <span className="cell-data-name">{row.row.original.dishes.dish}</span>
              </div>
            </div>
          )
        },
    },
    {
        Header: <div>CHEFS<i className="fa fa-sort"></i></div>,
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
        },
    },
    {
        Header: 'ALLERGENS',
        accessor: 'allergens',
        Cell: row => {
          console.log(row.value);
          if (row.value.length > 3) {
            const allergs = row.value.slice(0, 3);
            return (
              <div className="allergens-cell">
                {allergs.map(allerg => 
                  <div>{allerg},</div>
                )}
              <ZymmoTagNo value={row.value.length - 3} />
              </div>
            ) 
          } else {
            return (
              <div className="allergens-cell">
                {row.value.map(allerg => 
                  <div>{allerg},</div>
                )}
              </div>
            ) 
          }
        },
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
        Header: <div>AMOUNT<i className="fa fa-sort"></i></div>,
        accessor: 'amount',
        Cell: row => {
          return (
            <div className="cell-data-amount">{row.value ? row.value : '-'}</div>
          )
        }
    },

];