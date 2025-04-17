import Main from "../components/Main.js";
import Navbar from "../components/Navbar.js";
import AboutImg from "../assets/2.jpg"
import Footer  from "../components/Footer.js";

function About() {
  return (
    <>
      <Navbar />
      <Main
        cName="main-about"
        textClass="main-about-text"
        mainImg={AboutImg}
        imgClass="main-img"

        welcome="Our Mission"

        title="At Eden Trek, we are committed to making travel easier, accessible, and more enjoyable for everyone. Our goal is to provide all the necessary tools, resources, and support to ensure that your journey is memorable. Whether you’re traveling for leisure or business, we’ve got your back every step of the way."

        features="Features"

        text="Eden Trek offers a wide variety of travel options, including trains, flights, hotels, buses, and cabs, making it a one-stop solution for all your travel needs. With real-time availability, competitive pricing, and diverse travel classes, you can compare and choose the best options that suit your needs. Our platform also includes special fare categories for students, senior citizens, and more, ensuring everyone can travel affordably. Additionally, we provide a rewards program where frequent travelers can earn points and unlock exclusive discounts and benefits. Our easy-to-use interface and secure payment system make booking and rebooking a breeze. With personalized holiday packages, customer reviews, and a seamless booking history, Eden Trek ensures a smooth and enriching travel experience every time."
      />
      <Footer />
    </>
  );
}

export default About;