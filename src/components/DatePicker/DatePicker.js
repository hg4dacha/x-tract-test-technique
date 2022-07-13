import React, { useState, useEffect } from "react";
import Button from '../Button/Button'




const DatePicker = () => {

    const [dateTimeSelected, setDateTimeSelected] = useState('');
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState('');

    const handleDateChange = (e) => {
        setDateTimeSelected(e.target.value)
        setDateSelected(new Date(e.target.value).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: '2-digit'}));
        setTimeSelected(new Date(e.target.value).toLocaleTimeString('us-US', {hour: '2-digit', minute: '2-digit'}))
    }

    const handleDisplayDate = () => {
        console.log(`${new Date(dateTimeSelected).toLocaleDateString('fr-FR', {day: '2-digit', month: 'long', year: 'numeric'})} - ${new Date(dateTimeSelected).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'})}`);
    }

    const handleResetDate = () => {
        setDateTimeSelected(new Date());
    }

    useEffect( () => {
        setDateTimeSelected(new Date());
        setDateSelected(new Date().toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: '2-digit'}));
        setTimeSelected(new Date().toLocaleTimeString('us-US', {hour: '2-digit', minute: '2-digit'}));
    }, [])

    return (
        <div className="calendar-content">
            <h2 className="tittle">Schedule Response</h2>
            <div className="datetime-content">
                <div className="date-side">
                    <div className="info-content">
                        <div className="info-label">
                            Date
                        </div>
                        <div className="info">
                            {dateSelected}
                        </div>
                    </div>
                    <input
                        type="datetime-local"
                        id="calendar"
                        name="calendar"
                        value={dateTimeSelected}
                        onChange={handleDateChange}/>
                        <div>
                            <Button
                                type='Schedule'
                                onClick={handleDisplayDate}
                            />
                            <Button
                                type='Cancel'
                                onClick={handleResetDate}
                            />
                        </div>
                    </div>
                    <div className="time-side">
                        <div className="info-content">
                            <div className="info-label">
                                Time
                            </div>
                            <div className="info">
                                {timeSelected}
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )

}

export default DatePicker;