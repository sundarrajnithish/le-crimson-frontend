/*Landing page with logo and login button*/
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
// import Footer from "./footer";
import "./Login.css";

=======
import Footer from "./footer";
import "./Login.css";


>>>>>>> Stashed changes
function Landingpage() {
  /*To navigate to loginpage from landing page*/
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div class="container-L">
      <div class="login_box">
        <img class="i" src={require("./logor.png")} alt="Company Logo" />

        <button class="login-btn" onClick={routeChange}>
          <b>Login</b>
        </button>
      </div>
<<<<<<< Updated upstream
      {/* <Footer /> */}
=======
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default Landingpage;
