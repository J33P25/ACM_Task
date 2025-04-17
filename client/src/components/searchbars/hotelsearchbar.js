import React from 'react';
import './searchbarstyle.css';

function Hotelsearchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar-items">

                <i className="fa-solid fa-building searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Destination</p>
                    <input type="text" className="inputbox"/>
                </div>


                <i className="fa-solid fa-calendar-alt searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Check-In</p>
                    <input type="date" className="inputbox" />
                </div>

                <i className="fa-solid fa-calendar-alt searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Check-Out</p>
                    <input type="date" className="inputbox" />
                </div>


                <i className="fa-solid fa-users searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Number of Guests</p>
                    <input type="number" className="inputbox" min="1" />
                </div>

                <button className="search-btn">
                    <i className="fa-solid fa-search"></i> Search
                </button>

            </div>
        </div>
    );
}

export default Hotelsearchbar;
