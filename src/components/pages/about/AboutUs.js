import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  let navigate = useNavigate();
  const route = () => {
    let path = `/`;
    navigate(path);
  };
  const route1 = () => {
    let path = `/ContactUs`;
    navigate(path);
  };

  return (
    <>
      <section className="about">
        <div className="main">
          <img
            className="Aimg"
            src={require("./logo.png")}
            alt="Company Logo"
          />
          <div className="about-text">
            <h1></h1>
            <h1></h1>
            <h1>
              <i>{"  "}About us</i>{" "}
            </h1>
            <h5>company overview</h5>
            <p className="pp">
            Crimson News is a Montreal-based news service provider. We are unbiased and independent, and each day we produce content that educates and entertains millions of people across the world. Montreal is historically known as the gathering place for many First Nations. Today, it is home to a diverse population of Indigenous and other peoples. We respect the continued connections – past, present and future – in our ongoing relationships with Indigenous and other peoples within the Montreal Community
Who we are
Software is developed by five students of Concordia University to provide news to the public hazel free. The site is developed purely for academic purposes
            </p>
            <button className="buttonabout" type="button" onClick={route1}>
              Let's connect
            </button>
            {}
            <button className="buttonabout" type="button" onClick={route}>
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
