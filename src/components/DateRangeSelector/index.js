import React, { useState } from 'react';
import './DateRangeSelector.css';
import Images from '../../assets/icons';
import moment from 'moment';
import DatePicker from 'react-date-picker';

const DateRangeSelector = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="date-range-selector">
            <div className="date-range-title">
                PICK A DATE RANGE
            </div>
            <div className="date-range-picker">
                <div>START DATE</div>
                <div>
                    <div className="picked-date">
                        {
                            moment(startDate.toISOString()).format('ll')
                        }
                    </div>
                    <div className="date-picker">
                        <img src={Images.calender} />
                        {/*
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            />
                        */}
                    </div>
                </div>
            </div>
            <div className="date-range-picker">
                <div>END DATE</div>
                <div>
                    <div className="picked-date">
                        {
                            moment(endDate.toISOString()).format('ll')
                        }
                    </div>
                    <div className="date-picker">
                        <img src={Images.calender} />
                        {/*
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            />
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateRangeSelector;