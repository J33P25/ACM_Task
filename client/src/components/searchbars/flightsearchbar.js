import React, { useState } from 'react';
import './searchbarstyle.css';

function FlightSearchbar() {

    const [tripType, setTripType] = useState('roundTrip'); // 'oneWay' or 'roundTrip'

    return (
        <div className="searchbar">
            <div className="searchbar-items">

                        <div className="trip-type">
                    <label>
                    <input
                        type="radio"
                        name="tripType"
                        value="oneWay"
                        checked={tripType === 'oneWay'}
                        onChange={() => setTripType('oneWay')}
                    />
                    One‑way
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="tripType"
                        value="roundTrip"
                        checked={tripType === 'roundTrip'}
                        onChange={() => setTripType('roundTrip')}
                    />
                    Round‑trip
                    </label>
                </div>

                <i className="fa-solid fa-plane searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Origin</p>
                    <input type="text" className="inputbox"/>
                </div>

                <i className="fa-solid fa-location-dot searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Destination</p>
                    <input type="text" className="inputbox"/>
                </div>

                <i className="fa-solid fa-calendar-alt searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Departure Date</p>
                    <input type="date" className="inputbox" />
                </div>

                {tripType === 'roundTrip' && (
                    <>
                        <i className="fa-solid fa-calendar-alt searchbar-icon"></i>
                        <div className="searchbar-content">
                            <p className="label">Return Date</p>
                            <input type="date" className="inputbox" />
                        </div>
                    </>
                
                )}
                

                <i className="fa-solid fa-users searchbar-icon"></i>
                <div className="searchbar-content">
                    <p className="label">Number of Passengers</p>
                    <input type="number" className="inputbox" min="1" />
                </div>

                <button className="search-btn">
                    <i className="fa-solid fa-search"></i> Search
                </button>

            </div>
        </div>
    );
}

export default FlightSearchbar;
