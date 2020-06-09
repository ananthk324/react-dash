import React from 'react';
import './DataBar.css';

const DataBar = ({ title = "", data }) => {

    return (
        <div className="databar">
            {   title &&
                <div className="databar-title">
                    {title}
                </div>
            }
            <div className="databar-container">
                {
                    data.map(data => 
                        <div className="data-rectangle">
                            <div className="value">
                                {data.value}
                            </div>
                            <div className="text-content">
                                {data.text}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DataBar;