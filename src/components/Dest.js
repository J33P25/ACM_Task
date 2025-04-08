import './Dest.css'
import Kerala1 from '../assets/5.jpg'
import Kerala2 from '../assets/4.jpg'
import Goa1 from '../assets/7.jpg'
import Goa2 from '../assets/6.jpg'

const Dest = () => {
    return (
        <div className="dest"> 
            <h1>Popular Destinations</h1>
            <p>Discover the world's most loved travel spots handpicked for you.</p>

            <div className="first-head">
                <div className="first-desc">
                    <h2>Kerala, God's Own Country</h2>
                    <p>Kerala, often referred to as "God's Own Country," is famous for its backwaters, lush greenery, and tranquil beaches. With picturesque houseboats, hill stations, and vibrant cultural festivals, Kerala offers a peaceful yet immersive experience of nature, history, and Kerala's traditional lifestyle.</p>
                </div>
            </div>

            <div className="image1">
                <img alt="img" src={Kerala1} />
                <img alt="img" src={Kerala2} />
            </div>


            <div className="second-head">
                <div className="second-desc">
                    <h2>Goa, Where Sun Meets the Sea</h2>
                    <p>Goa is a popular coastal haven known for its golden beaches, vibrant nightlife, and Portuguese influence. Whether you're exploring serene shores, bustling markets, or historic churches, Goa offers a mix of relaxation, adventure, and cultural experiences, making it a must-visit destination.</p>
                </div>
            </div>

            <div className="image2">
                <img alt="img" src={Goa1} />
                <img alt="img" src={Goa2} />
            </div>




        </div>

        
    );
}
export default Dest;

