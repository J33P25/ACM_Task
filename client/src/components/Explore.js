import './Explorestyle.css';
import Expdata from './Expdata';

function Explore(){
    return(
        <div className="explore">
            <h1>Stay, Dine, and Explore</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <Expdata />
        </div>
    );
}

export default Explore;