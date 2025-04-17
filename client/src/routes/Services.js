import React, { useState } from 'react';
import Main from "../components/Main.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ServiceImg from "../assets/15.jpg"
import '../components/searchbars/searchbarstyle.css';

import TrainSearchbar   from '../components/searchbars/trainsearchbar.js';
import FlightSearchbar  from '../components/searchbars/flightsearchbar.js';
import HotelSearchbar   from '../components/searchbars/hotelsearchbar.js';
import BusSearchbar     from '../components/searchbars/busearchbar.js';
import CabSearchbar     from '../components/searchbars/cabsearchbar.js';


const TABS = [
    { name: 'Trains', component: <TrainSearchbar /> },
    { name: 'Flights', component: <FlightSearchbar /> },
    { name: 'Hotels', component: <HotelSearchbar /> },
    { name: 'Buses',   component: <BusSearchbar /> },
    { name: 'Cabs',    component: <CabSearchbar /> },
  ];
  
  export default function Services() {
    const [activeTab, setActiveTab] = useState(TABS[0].name);
  
    return (
      <>
        <Navbar />
        <Main
          cName="main-services"
          imgClass="img-services"
          textClass="text-services"
          mainImg={ServiceImg}
          welcome="Ready for your next adventure?"
          title="Explore stunning destinations across the globe!"
        >
          <div className="service-tabs">
            {TABS.map(tab => (
              <button
                key={tab.name}
                className={tab.name === activeTab ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
  
          <div className="tab-content">
            {TABS.find(tab => tab.name === activeTab)?.component}
          </div>
        
        
        </Main>
        <Footer />
      </>
    );
  }