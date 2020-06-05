import React from 'react';
import './ManageFoodies.css';
import HeaderWithFilter from '../../components/Header/HeaderWithFilter';
import TableSortable from '../../components/TableSortable';
import data from '../../constants/ordersSampleData';
import columns from '../../constants/columnManageFoodies';

const ManageFoodies = () => {
    return (
        <div className="manage-foodies-container">
            <HeaderWithFilter title={"MANAGE FOODIES"} value={"15"} path={"/foodies/view"} />
            <TableSortable data={data} columns={columns} />
        </div>
    );
}

export default ManageFoodies;