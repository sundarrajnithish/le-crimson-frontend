import React from "react";

import Header from "../src/components/common/header/Header";

import AboutUs from "./AboutUs";

import Footer from "./components/contact/footer";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer-container-AboutUs">
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
