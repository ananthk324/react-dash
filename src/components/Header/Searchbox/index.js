import React from 'react';
import './Searchbox.css';

const Searchbox = () => {
    return (
        <div className="search-box">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default Searchbox;