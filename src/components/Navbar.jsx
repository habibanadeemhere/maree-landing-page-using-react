import React, { useEffect } from "react";
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

AOS.init({ once: true, duration: 800 });

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top nav">
        <div className="container-fluid">
          <img src={img1} alt="Logo" className="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarText" aria-controls="navbarText"
            aria-expanded="false" aria-label="Toggle navigation">
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
  <div className="hero-text animate-hero-text">
    <h1 className="animate-title">
      Marée <img src={img9} alt="Butterfly" className="butterfly butterfly-entrance" />
    </h1>
    <p className="animate-para">
      Welcome to Marée, a brand new illustration & design portfolio just
      waiting for your work to start populating its templates!
    </p>
    <button className="hero-btn animate-btn">Purchase</button>
  </div>

  <img src={img2} alt="Cloud"   className="cloud floating1 animate-cloud" />
  <img src={img3} alt="Bird"    className="bird floating2 animate-bird" />
  <img src={img5} alt="Leaf1"   className="leaf leaf1 floating4 animate-leaves" />
  <img src={img6} alt="Leaf2"   className="leaf leaf2 floating5 animate-leaves animate-leaves-d2" />
  <img src={img7} alt="Leaf3"   className="leaf leaf3 floating6 animate-leaves animate-leaves-d3" />
  <img src={img8} alt="Leaf4"   className="leaf leaf4 floating7 animate-leaves animate-leaves-d4" />
  <img src={img4} alt="Bicycle" className="bike floating8 animate-bike" />
</section>
      <br /><br /><br /><br />

      <div className="cards">
        {[
          { img: img10, title: "Main Home" },
          { img: img11, title: "Floating Portfolio" },
          { img: img12, title: "Portfolio Pinterest" },
          { img: img13, title: "Animated Slider" },
          { img: img14, title: "Portfolio Metro" },
          { img: img15, title: "Portfolio Gallery" },
          { img: img16, title: "Interactive Links" },
          { img: img17, title: "Split Slider Showcase" },
          { img: img18, title: "Portfolio Carousel" },
        ].map((card, i) => (
          <div className="card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="imageScroll">
              <div className="images">
                <img src={card.img} alt={card.title} />
              </div>
            </div>
            <h3 className="title">{card.title}</h3>
          </div>
        ))}
      </div>

      <br /><br /><br />

      <section className="cheerfulSection">
        <span className="decor dot"></span>
        <span className="decor heart"></span>
        <span className="decor leaf left"></span>
        <span className="decor leaf right"></span>
        <div className="cheerfulContent" data-aos="fade-up">
          <h2>
            Your brand new folio with a professional layout collection
            and quite a cheerful <em>personality!</em>
          </h2>
          <button className="cheerfulBtn">PURCHASE</button>
        </div>
        <br /><br />
        <div className="lastleaf" data-aos="fade-up" data-aos-delay="200">
          <img className="last" src={img20} alt="" />
          <img className="last" src={img19} alt="" />
          <img className="last" src={img21} alt="" />
        </div>
      </section>
    </>
  );
}

export default Navbar;
