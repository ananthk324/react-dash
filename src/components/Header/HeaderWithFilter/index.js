import React from 'react';
import './HeaderWithFilter.css';
import Images from '../../../assets/icons';
import Searchbox from  '../Searchbox'
import AdminDropdownMenu from '../AdminDropdownMenu';
import { Link } from 'react-router-dom';

const HeaderWithFilter = ({ title, value, path }) => {
    return (
        <div className="headerf-container">
            <div className="headerf-title">
                <Link to={path}>
                    <div>{title}</div>
                </Link>
                <div><i className="fa fa-circle"></i></div>
                <div>{value}</div>
            </div>
            <Searchbox />
            <div className="dropdown-bars">
                <img src={Images.bars_red} />
            </div>
            <AdminDropdownMenu />
        </div>
    )
}

export default HeaderWithFilter;