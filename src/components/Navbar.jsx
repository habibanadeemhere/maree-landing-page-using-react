import React from "react";

import './Navbar.css';
import img1 from "../assets/envato.png";
import img2 from "../assets/cloud-shape.png";
import img3 from "../assets/bird-image.png";
import img4 from "../assets/wings-image.png";
import img5 from "../assets/leaf1.png";
import img6 from "../assets/leaf2.png";
import img7 from "../assets/leaf3.png";
import img8 from "../assets/leaf4.png";
import img9 from "../assets/butterfly.png";
import img10 from "../assets/cardimg.jpg";
import img11 from "../assets/cardimg2.jpg";
import img12 from "../assets/cardimg3.jpg";
import img13 from "../assets/cardimg4.jpg";
import img14 from "../assets/cardimg5.jpg";
import img15 from "../assets/cardimg6.jpg";
import img16 from "../assets/cardimg7.jpg";
import img17 from "../assets/cardimg8.jpg";
import img18 from "../assets/cardimg9.jpg";
import img19 from "../assets/last.png";
import img20 from "../assets/lastleaf.png";
import img21 from "../assets/end.png";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({ once: true });

function Navbar() {
  
  return (
    <>
  <nav className="navbar navbar-expand-lg sticky-top nav">
        <div className="container-fluid">
          <img src={img1} alt="Logo" className="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active envato-text" href="#">
                  <b className="b1">envato</b>
                  <span className="span1">market</span>
                </a>
              </li>
            </ul>
            <button className="navbar-text btn1">Buy now</button>
          </div>
        </div>
      </nav>

      
      <section className="hero">
       
        <div className="hero-text">
          <h1>
            Marée <img src={img9} alt="Butterfly" className="butterfly" />
          </h1>
          <p>
            Welcome to Marée, a brand new illustration & design portfolio just
            waiting for your work to start populating its templates!
          </p>
          <button className="hero-btn">Purchase</button>
        </div>

      
        <img src={img2} alt="Cloud" className="cloud floating1" />
        <img src={img3} alt="Bird" className="bird floating2" />

        <img src={img5} alt="Leaf1" className="leaf leaf1 floating4" />
        <img src={img6} alt="Leaf2" className="leaf leaf2 floating5" />
        <img src={img7} alt="Leaf3" className="leaf leaf3 floating6" />
        <img src={img8} alt="Leaf4" className="leaf leaf4 floating7" />
        <img src={img4} alt="Bicycle" className="bike floating8" 
        />
      </section>

<br /><br /><br /><br />

<div className="cards">
<div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img10} alt="img1" />


        </div>
      </div>

      <h3 className="title">Main Home</h3>
    </div>

    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img11} alt="img1" />


        </div>
      </div>

      <h3 className="title">Floating Portfolio</h3>
    </div>

    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img12} alt="img1" />


        </div>
      </div>

      <h3 className="title">Portfolio Pinterest</h3>
    </div>


    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img13} alt="img1" />


        </div>
      </div>

      <h3 className="title">Animated Slider</h3>
    </div>



    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img14} alt="img1" />


        </div>
      </div>

      <h3 className="title">Portfolio Metro</h3>
    </div>

    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img15} alt="img1" />


        </div>
      </div>

      <h3 className="title">Portfolio Gallery</h3>
    </div>


<div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img16} alt="img1" />


        </div>
      </div>

      <h3 className="title">Interactive Links</h3>
    </div>

    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img17} alt="img1" />


        </div>
      </div>

      <h3 className="title">Split Slider Showcase</h3>
    </div>

    <div className="card">
      <div className="imageScroll">
        <div className="images">
          <img src={img18} alt="img1" />


        </div>
      </div>

      <h3 className="title">Portfolio Carousel
</h3>
    </div></div>
    <br /><br /><br />

<section className="cheerfulSection">
      <span className="decor dot"></span>
      <span className="decor heart"></span>
      <span className="decor leaf left"></span>
      <span className="decor leaf right"></span>

      <div className="cheerfulContent">
        <h2>
          Your brand new folio with a professional layout collection
          and quite a cheerful <em>personality!</em>
        </h2>

        <button className="cheerfulBtn">PURCHASE</button>
      </div>
<br /><br />
        <div className="lastleaf">
        <img className="last" src={img20} alt="" />
<img className="last" src={img19} alt="" />
<img className="last" src={img21} alt="" />

      </div>
    </section>
</>

  
  );
}

export default Navbar;

