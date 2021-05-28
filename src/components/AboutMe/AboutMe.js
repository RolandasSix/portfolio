import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Rolandas Siksnelis</h1>
        <div className="subtitle">
          <h3>I am junior Full stack web developer and QA, but learning hard to become the master :)</h3>
          <p>
            Creating and developing web pages, apps and other soliutions... <br />
            Experienced in Html, Css, Sql and Javascript with technology ReactJS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
