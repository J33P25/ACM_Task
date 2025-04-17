import Main from "../components/Main.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Searchbar from "../components/Searchbar.js";
import ServiceImg from "../assets/15.jpg"

function Services(){
    return(
        <>
        <Navbar />
        <Main 

            cName = "main-services"
            textClass = "text-services"
            imgClass = "img-services"
            mainImg = {ServiceImg}

            welcome = "Ready for your next adventure?"
            title = "Explore stunning destinations across the globe!!"
            
        >
            <Searchbar /> 
        </Main>
        <Footer />
        </>
    );
}

export default Services;