import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";

AOS.init({ once: true });
function App() {
  
   

  return (
    <>

        <Loader />
    
        <Navbar />
      
    </>
  );
  
}

export default App
