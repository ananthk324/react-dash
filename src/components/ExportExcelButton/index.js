import React from 'react';
import Image from '../../assets/icons';
import './ExportExcelButton.css';

const ExportExcelButton = () => {
    return (
        <button className="export-excel">
            <img src={Image.excel} />
            Export Excel
        </button>
    );
}

export default ExportExcelButton;