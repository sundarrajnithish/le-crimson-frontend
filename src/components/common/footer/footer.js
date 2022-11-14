import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/aboutUs`;
    navigate(path);
  };
  return (
    <div className="container paddingSmall">
    <div align="center">
      <ul>
        <a onClick={routeChange}>About Us</a>
        {"   "} <a>Contact Us</a>
        {"   "}
        <a> </a>
        {"   "}
      </ul>
    </div>
    </div>
  );
}

export default Footer;
