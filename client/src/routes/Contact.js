import Main from "../components/Main.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ContactImg from "../assets/14.jpg";
import ContactForm from "../components/Contactform.js";

function Contact() {
    return (
        <>
            <Navbar />
            <Main
                cName="main-contact"
                mainImg={ContactImg}
                imgClass="contact-img"
                welcome="Contact Us"
                textClass="contact-text"
            />
            <ContactForm />
            <Footer />
            
        </>
    );
}

export default Contact;