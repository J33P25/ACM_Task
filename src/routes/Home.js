import Main from "../components/Main";
import Navbar from "../components/Navbar.js";
import Dest from "../components/Dest.js";


function Home() {
  return (
    <>
    <Navbar />
      <Main
        cName="Main"
        textClass="Main-text"
        mainImg="https://images.unsplash.com/photo-1512235761740-a609c3565912?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        welcome="Welcome to Eden Trek!"
        title="Your Journey Begins Here."
        text="At Eden Trek, we believe that travel is more than just reaching a destination — it's about the experience, the memories, and the freedom to explore the world your way. We’re here to simplify travel planning, making it intuitive, inspiring, and stress-free."
        btnText="Travel Plan"
        btnClass="show"
        url="/"
      />
      <Dest />
    </>
  );
}

export default Home;