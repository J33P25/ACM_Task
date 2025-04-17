import './Explorestyle.css';
import Hotel1 from '../assets/8.jpg'
import Hotel2 from '../assets/9.png'
import Rest1 from '../assets/10.webp'
import Rest2 from '../assets/11.jpg'
import Transp1 from  '../assets/12.jpg'
import Transp2 from '../assets/13.webp'

function Exdata (){
    return(
        <>
            <div className="first-head">
                <div className="first-desc">
                    <h2>Hotels</h2>
                    <p style ={{paddingBottom: "10px"}}>In Goa, travelers arriving via Dabolim Airport can consider staying at the Bogmallo Beach Resort, located just 1 km from the terminal, offering beachfront views and relaxing vibes, or the La-Paz Gardens Beacon Hotel, only 2 km away, with cozy accommodations in Vasco da Gama. Those near Thivim Railway Station have options like Treebo Green Village Resort, about 15 km from the station with a pool and resort-style stay, or Island House Goa, a tranquil escape about 20 km away. For visitors heading to Baga Beach, popular choices include Acron Waterfront Resort, a boutique stay overlooking the Baga River, and Fiesta Beach Resort, ideally located right on the beach, blending comfort and convenience.</p>

                    <p>In Kerala, near Cochin International Airport, top-rated stays include Flora Airport Hotel and Convention Centre, just 1 km from the airport, and the luxurious Courtyard by Marriott Kochi Airport, situated a mere 1.5 km away. Near Alappuzha Railway Station, visitors can opt for Alleppey Beach Garden, offering seafront stays with easy rail access, or Warmth Lake Haven, a scenic resort close to the tranquil backwaters. These accommodations offer a great mix of accessibility and comfort whether arriving by air or rail.</p>
                </div>
            </div>

            <div className="image1">
                <img alt="img" src={Hotel1} />
                <img alt="img" src={Hotel2} />
            </div>
            <div className="second-head">
                <div className="second-desc">
                    <h2>Restaurants</h2>
                    <p style ={{paddingBottom: "10px"}}>Goa’s culinary delights near Dabolim Airport include Joet's Bar and Restaurant, a must-visit for seafood lovers located just 1.5 km from the terminal, and Haati Kaapi, conveniently situated inside the airport, perfect for quick coffee and snacks. Near Thivim Station, Spice Goa stands out for its authentic Goan dishes, while Zubin’s Parsi Food and More offers something unique with Parsi flavors. Around Baga Beach, the popular Britto’s offers beachfront dining with great seafood, and Mambo’s Café is a lively spot known for its vibrant atmosphere and music.</p>

                    <p>In Kerala, food options near Cochin Airport include Peppermint Cafe, a cozy café for light meals and drinks, and Lila’s Kitchen, which serves a mix of local and global cuisines. Around Alappuzha Station, you’ll find Cafe Paradiso Espresso Coffee Bar, perfect for a good coffee break, and Brews and Burgers Bistro, which brings a contemporary twist to casual dining. These eateries provide a variety of tastes and experiences for travelers on the go.</p>
                </div>
            </div>

            <div className="image2">
                <img alt="img" src={Rest1} />
                <img alt="img" src={Rest2} />
            </div>

            <div className="third-head">
                <div className="third-desc">
                    <h2>Transportation</h2>
                    <p style ={{paddingBottom: "10px"}}>In Goa, Dabolim Airport (Goa International Airport) serves as the main air hub, located in Vasco da Gama, and is well connected to beach destinations like Baga and Calangute via taxis and rental vehicles. Thivim Railway Station connects North Goa to other Indian cities and is a common arrival point for visitors heading to Mapusa, Baga, and Anjuna. Local buses, bike rentals, and taxis make getting around both convenient and affordable.</p>

                    <p>In Kerala, Cochin International Airport is a major gateway in the state, serving Kochi and its surrounding areas. It is well-supported by taxis and app-based cab services for travel across Ernakulam and Alappuzha. Alappuzha Railway Station offers excellent connectivity to Kerala’s famous backwater regions and beach towns, with autos and taxis easily available outside the station. Whether by air or train, both Goa and Kerala provide smooth transit options for tourists seeking both adventure and relaxation.</p>
                </div>
            </div>

            <div className="image3">
                <img alt="img" src={Transp1} />
                <img alt="img" src={Transp2} />
            </div>
        </>
    );
}

export default Exdata;