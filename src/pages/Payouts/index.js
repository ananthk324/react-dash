import React from 'react';
import Header from '../../components/Header';
import './Payouts.css';
import TableHeader from '../../components/TableHeader';
import TableSortable from '../../components/TableSortable';
import sampleData from '../../constants/ordersSampleData';
import columns from './columnsForPayouts';
import DateRangeSelector from '../../components/DateRangeSelector';

const Payouts = () => {

    const header_title = "PAYOUTS TO CHEFS";

    return (
        <div className="payouts-container">
            <Header title={header_title} isSearchBox={false} />
            <DateRangeSelector />
            <TableHeader 
                title={"PAYOUTS IN THE SELECTED DATE RANGE"} 
                value={"87"}
                showFilter={false}
                />
            <TableSortable data={sampleData} columns={columns} />
        </div>
    );
}

export default Payouts;