import React, { useState } from 'react';
import './Dropdown.css';
import DatePicker from 'react-date-picker';

function Dropdown() {

    const needDatePicker = true;

    const [data, setData] = useState([
        { id: "0", value: "Upcoming", checked: false },
        { id: "1", value: "Completed", checked: false },
        { id: "2", value: "Refunded", checked: false },
        { id: "3", value: "Case Opened", checked: false },
        { id: "4", value: "Case closed", checked: false },
        { id: "5", value: "Cancelled", checked: false }]);
    console.log(data)
    const [statusFilters, setStatusFilters] = useState([]);


    const handleChange = id => {
        const tempData = [...data]
        tempData[id].checked = !tempData[id].checked;
        setData(tempData)
        console.log(data)
    }

    const handleSubmit = e => {
        const filters = data.filter(status => status.checked === true).map(val => val.value)
        filters.push(startDate)
        filters.push(endDate)
        console.log("filters", filters)
        setStatusFilters(filters)
        console.log("statusFilter", statusFilters)
    }


    const selectStartDate = date => {
        setStartDate(date)
    }
    const selectEndDate = date => {
        setEndDate(date)
    }

    
function getDatePicker() {
    return (
        <div style={{ padding: "10px"}}>
            <p style={{ margin: "5px 10px", marginBottom: "15px", color: "#313030" }}>FILTER BY DATE</p>

            <div className="calendar">
                <p>START DATE</p>
                <span style={{ fontSize: "9px" }}>{new Date(startDate).toString().slice(4, 15)}</span>
                <DatePicker
                    selected={startDate}
                    onChange={selectStartDate}
                    dateFormat="mmm dd, yyyy"
                    className="calendarIcon"></DatePicker>
            </div>
            <div className="calendar">
                <p>END DATE</p>
                <span style={{ fontSize: "9px" }}>{new Date(endDate).toString().slice(4, 15)}</span>
                <DatePicker
                    selected={endDate}
                    onChange={selectEndDate}
                    dateFormat="mmm dd, yyyy"

                    className="calendarIcon"></DatePicker>
            </div>
        </div>
    )
    }
    const [startDate, setStartDate] = useState("Mar 14, 2020");
    const [endDate, setEndDate] = useState("Mar 14, 2020");
    return (
        <div className="dropdownMenu">
            <div className="drop-down">
                <p style={{ margin: "10px" }}>FILTER BY STATUS</p>
                <div className="checkBoxes">
                    {data.map((status, index) => (
                        <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                            <input type="checkbox" className="checkbox" onChange={() => handleChange(status.id)}></input>
                            <span style={{ marginLeft: "10px", fontSize: "12px" }}>{status.value}</span>
                        </div>
                    ))}
                </div>
                {needDatePicker ? getDatePicker() : <div></div>}

            </div>
            <button className="applyButton" onClick={handleSubmit}>APPLY</button>
        </div>
    )

}

export default Dropdown
