import "./About.css";
import bandImg from "../img/Band Members.png";
import React from "react";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <h1 className="aboutHeading">ABOUT</h1>
        <div>
          <img
            src={
              "https://thumbs.dreamstime.com/z/circle-group-shoes-dark-wooden-background-top-view-circle-group-shoes-131641004.jpg"
            }
            alt="band"
          />
          <p className="aboutContent">
           The Evolution of Shoes Shoes, an essential element of
            human attire, have evolved significantly over the centuries.
            Originally, they were designed to protect feet from harsh
            environmental conditions. However, their function has transformed
            into a symbol of style, status, and identity. Functional and
            Symbolic Importance Shoes are not just about protection and comfort
            anymore; they have become a cultural artifact. They serve as a
            reflection of the wearer’s personality and social status. For
            example, high heels, initially worn by men in the 15th century for
            horse riding, have now become a symbol of femininity and power.
            Happy shopping!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
