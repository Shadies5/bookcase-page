import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.css"

const About = (props) => {
  return (
    <>
      <div className="navbar">
        <a href= "/"> Home </a> |
        <a href="/about"> About </a> |
        <Link to="/bookcase" className="bookLink"> 
        Bookcase ({props.bookLength})
        </Link>
      </div>
      <div className="page">Welcome to the Bookcase Application.</div>
      </>
  );
};

export default About;
