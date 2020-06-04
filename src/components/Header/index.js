import React from 'react';
import './Header.css';
import Searchbox from './Searchbox';
import AdminDropdownMenu from './AdminDropdownMenu';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title">
                HOME
            </div>
            <Searchbox />
            <AdminDropdownMenu />
        </div>
    )
}

export default Header;