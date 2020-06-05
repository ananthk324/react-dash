import React from 'react';
import './DataBox.css'

function DataBox({ name, count }) {
    return (
        <div className="dataBox">
            <div style = {{width: "100%", height:"60%"}}>
                <div className = "round">
                
                        <p className = "data">{count}</p>
                 
                </div>
            </div>
            <p className = "dataName">{name}</p>
        </div>
    )
}

export default DataBox;