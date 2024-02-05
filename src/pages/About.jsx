import React from "react";
import myImage from "../assets/vansky.png";

const About = () => {
  return (
    <>
      <img src={myImage} alt="" className="col-12" />
      <div className="container mt-5">
        <h4 className="fw-bolder fs-3 text-center">
          Don't squeeze in a sedan when you can relax in a van.
        </h4>
        <p className="fw-bold">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br /> Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p><br /><br />

        <div style={{backgroundColor:'#ffcd8c'}} className="p-5">
            <p className="fs-3 fw-bold">Your destination is waiting. <br /> Your van is ready.</p>
            <button className="btn btn-dark">Explore our vans</button>
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
