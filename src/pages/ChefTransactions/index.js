import React from 'react';
import './ChefTransactions.css';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from './columnsForChefTransactions';
import ExportExcelButton from '../../components/ExportExcelButton';

const ChefTransactions = () => {
    return (
        <div className="chef-transactions-container">
          <div className="breadcrumbs-container">
              <div>Manage Chefs<i className="fa fa-angle-right"></i></div>
              <div>Fredrick Thompson<i className="fa fa-angle-right"></i></div>
              <div>Transactions</div>
          </div>
          <div className="transactions-title">
              <div>TRANSACTIONS</div>
              <ExportExcelButton />
          </div>
          <TableSortable columns={columns} data={data} />
        </div>
    );
}

export default ChefTransactions;