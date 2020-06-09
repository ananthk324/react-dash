import React from 'react';
import DataBar from '../../components/DataBar';
import Header from '../../components/Header';
import './Financials.css';
import TableHeader from '../../components/TableHeader';
import TableSortable from '../../components/TableSortable';
import sampleData from '../../constants/ordersSampleData';
import columns from './columnsForFinancials';
import DateRangeSelector from '../../components/DateRangeSelector';

const Financials = () => {

    const data = [
        { text: "Total Cash Flow", value: "$1429" },
        { text: "Total Payouts Sent", value: "$748" },
        { text: "Total Profit Earned", value: "$188" },
    ];

    const header_title = "FINANCIAL SUMMARY";


    return (
        <div className="financials-container">
            <Header title={header_title} isSearchBox={false} />
            <DateRangeSelector />
            <DataBar title={""} data={data} />
            <TableHeader 
                title={"ORDERS IN THE SELECTED DATE RANGE"} 
                value={"87"}
                showFilter={true}
                />
            <TableSortable data={sampleData} columns={columns} />
        </div>
    );
}

export default Financials;