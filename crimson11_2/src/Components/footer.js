import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/aboutUs`;
    navigate(path);
  };
  return (
    <div class="footer">
      <ul>
        <a onClick={routeChange}>About Us</a>
        {"   "} <a>Contact Us</a>
        {"   "}
        <a>Terms</a>
        {"   "}
      </ul>
    </div>
  );
}

export default Footer;
