import React from "react";
import img from "../assets/Banner6.png";

const CarouselComp = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide" 
      data-bs-ride="carousel"
      style={{ height: "95vh"}}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={img} style={{ height: "95vh"}}  className="position-relative d-block w-100" alt="..." />
          <div className="w-25 carousel-caption position-absolute bottom-50 end-100 d-none d-md-block">
            <h2>Get The Best VR Experience With Us</h2>
            <p><button className="btn btn-outline-light">Explore</button></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src={img} style={{ height: "95vh"}}  className="position-relative d-block w-100" alt="..." />
          <div  className="w-25 carousel-caption position-absolute bottom-50 end-100 d-none d-md-block">
            <h2>Want To Get In the World Of Simulator</h2>
            <p><button className="btn btn-outline-light">Explore</button></p>
          </div>
        </div>
        <div className="carousel-item">
        <img src={img} style={{ height: "95vh"}}  className="position-relative d-block w-100" alt="..." />
          <div style={{ }} className="w-25 carousel-caption position-absolute bottom-50 end-100 d-none d-md-block">
            <h2>We Also Offer Intensive Training</h2>
            <p><button className="btn btn-outline-light">Check Out</button></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComp;
