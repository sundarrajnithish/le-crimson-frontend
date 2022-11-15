import Header from "../common/header/Header";
import Contact from "./Contact";
import Footer from "./footer";

const Homepages = () => {
  return (
    <>
      <div className="container-h">
        <Header />
        <br />
        <Contact />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="footer-container-Contact">
        <Footer />
      </div>
    </>
  );
};

export default Homepages;
