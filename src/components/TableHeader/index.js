import React from 'react';
import './TableHeader.css';
import Searchbox from '../Header/Searchbox';
import Images from '../../assets/icons';

const TableHeader = ({ title, value, showFilter = false }) => {

    return (
        <div className="table-header">
            <div className="table-header-title">
                <div>
                    {title}
                </div>
                <div>
                    <i className="fa fa-circle"></i>
                </div>
                <div>
                    {value}
                </div>
            </div>
            <Searchbox />
            { showFilter &&
                <div className="dropdown-bars">
                    <img src={Images.bars_red} />
                </div>
            }
        </div>
    )
}

export default TableHeader;