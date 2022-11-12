import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about">
      <div className="main">
        <img className="Aimg" src={require("./logor.png")} alt="Company Logo" />
        <div className="about-text">
          <h1></h1>
          <h1></h1>
          <h1>
            <i>{"  "}About us</i>{" "}
          </h1>
          <h5>company overview</h5>
          <p className="pp">
            Today, we're seeing the gradual evolution of Enterprise strategy,
            business models and frontier technology adopting new operating
            models that serve the Knowledge Economy led by Artificial
            Intelligence and Data Sciences. The leadership at HUBINO recognizes
            this need for the Enterprise market place and has built a global
            technology eco-system practice led HUB where there is a natural
            immersion and integration of the intelligence, technology, and human
            expertise which will help leaders be poised to thrive at the
            intersection of regulation and commerce
          </p>
          <button type="button">Let's connect</button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
