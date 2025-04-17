import React from 'react';
import './searchbarstyle.css';

function Searchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar-items">
                <i className="fa-solid fa-location-dot"></i>
                <div className="searchbar-content">
                    <p className="label">Location</p>
                    <select className="dropdown">
                        <option value="">Locations</option>
                    </select>
                </div>
            </div>

            <div className="searchbar-items">
                <i className="fa-solid fa-calendar-alt"></i>
                <div className="searchbar-content">
                    <p className="label">Dates</p>
                    <input type="date" className="dropdown" />
                </div>
            </div>

            <div className="searchbar-items">
                <i className="fa-solid fa-users"></i>
                <div className="searchbar-content">
                    <p className="label">Number of Guests</p>
                    <input type="number" className="dropdown" min="1"/>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
