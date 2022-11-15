import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

import Heading from "./components/common/heading/Heading";

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
            src={require("./logor.png")}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id mi libero. Nunc luctus erat mauris, commodo
              fringilla turpis sodales ut. Pellentesque dapibus sit amet nunc
              eget vulputate. Sed lectus erat, posuere sit amet lorem fermentum,
              egestas efficitur est. Suspendisse vel elementum nisl, sed aliquet
              sem. Mauris sit amet nisi sit amet velit gravida dapibus. Vivamus
              vestibulum dolor efficitur mi venenatis sollicitudin. Duis id
              pharetra dolor. Praesent nec venenatis lorem. Praesent id pharetra
              nisi. Nam eleifend, sem vel rhoncus feugiat, neque elit porttitor
              eros, nec semper purus nisl id risus. Duis vitae euismod neque.
              Fusce consequat faucibus bibendum. Nulla aliquam purus in luctus
              euismod. Nunc sit amet sem eu massa tincidunt facilisis.
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
