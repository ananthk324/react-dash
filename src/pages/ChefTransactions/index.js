import React from 'react';
import './ChefTransactions.css';
import Table from '../../components/Table';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnDataTransactions';
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
          <Table columns={columns} data={data} />
        </div>
    );
}

export default ChefTransactions;