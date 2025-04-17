import React from 'react';
import './searchbarstyle.css';

function Cabsearchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar-items">

                <i className="fa-solid fa-cab searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Pick-Up Location</p>
                    <input type="text" className="inputbox"/>
                </div>

                <i className="fa-solid fa-location-dot searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Drop-Off Location</p>
                    <input type="text" className="inputbox"/>
                </div>


                <i className="fa-solid fa-calendar-alt searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Date</p>
                    <input type="date" className="inputbox" />
                </div>


                <i className="fa-solid fa-users searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Number of Passengers</p>
                    <input type="number" className="inputbox" min="1" />
                </div>

                <i className="fa-solid fa-clock searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Time</p>
                    <select className="inputbox">
                        <option>12:00 AM</option>
                        <option>12:15 AM</option>
                        <option>12:30 AM</option>
                        <option>12:45 AM</option>
                        <option>1:00 AM</option>
                        <option>1:15 AM</option>
                        <option>1:30 AM</option>
                        <option>1:45 AM</option>
                        <option>2:00 AM</option>
                        <option>2:15 AM</option>
                        <option>2:30 AM</option>
                        <option>2:45 AM</option>
                        <option>3:00 AM</option>
                        <option>3:15 AM</option>
                        <option>3:30 AM</option>
                        <option>3:45 AM</option>
                        <option>4:00 AM</option>
                        <option>4:15 AM</option>
                        <option>4:30 AM</option>
                        <option>4:45 AM</option>
                        <option>5:00 AM</option>
                        <option>5:15 AM</option>
                        <option>5:30 AM</option>
                        <option>5:45 AM</option>
                        <option>6:00 AM</option>
                        <option>6:15 AM</option>
                        <option>6:30 AM</option>
                        <option>6:45 AM</option>
                        <option>7:00 AM</option>
                        <option>7:15 AM</option>
                        <option>7:30 AM</option>
                        <option>7:45 AM</option>
                        <option>8:00 AM</option>
                        <option>8:15 AM</option>
                        <option>8:30 AM</option>
                        <option>8:45 AM</option>
                        <option>9:00 AM</option>
                        <option>9:15 AM</option>
                        <option>9:30 AM</option>
                        <option>9:45 AM</option>
                        <option>10:00 AM</option>
                        <option>10:15 AM</option>
                        <option>10:30 AM</option>
                        <option>10:45 AM</option>
                        <option>11:00 AM</option>
                        <option>11:15 AM</option>
                        <option>11:30 AM</option>
                        <option>11:45 AM</option>
                        <option>12:00 PM</option>
                    </select>
                </div>

                <button className="search-btn">
                    <i className="fa-solid fa-search"></i> Search
                </button>

            </div>
        </div>
    );
}

export default Cabsearchbar;
