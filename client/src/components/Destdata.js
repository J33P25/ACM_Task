import { Component } from 'react';
import Kerala1 from '../assets/5.jpg'
import Kerala2 from '../assets/4.jpg'
import Goa1 from '../assets/7.jpg'
import Goa2 from '../assets/6.jpg'
import './Dest.css'

class Destdata extends Component{
    render(){
        return(
            <>
                <div className="first-head">
                <div className="first-desc">
                    <h2>Kerala, God's Own Country</h2>
                    <p>Kerala, often called “God’s Own Country,” is celebrated for its lush greenery, serene backwaters, and rich cultural traditions. Travelers are drawn to picturesque spots like the Alleppey backwaters, the misty hills of Munnar, Varkala’s cliffs and beach, and heritage-rich cities like Kochi. The weather is typically tropical and humid, with heavy monsoons, making October to March the best time to explore Kerala’s natural beauty and cultural charm.</p>
                </div>
            </div>

            <div className="image1">
                <img alt="img" src={Kerala1} />
                <img alt="img" src={Kerala2} />
            </div>
            <div className="second-head">
                <div className="second-desc">
                    <h2>Goa, Where Sun Meets the Sea</h2>
                    <p>Goa is a popular coastal haven known for its golden beaches, vibrant nightlife, and Portuguese heritage. Famous attractions include Baga and Palolem beaches, the energetic Anjuna party scene, historic churches in Old Goa, and bustling flea markets. The tropical climate brings warm summers and humid monsoons, so the best time to visit is between November and February, when the weather is cooler and ideal for beach outings and festivals.</p>
                </div>
            </div>

            <div className="image2">
                <img alt="img" src={Goa1} />
                <img alt="img" src={Goa2} />
            </div>
            </>
        );
    }
}

export default Destdata;    