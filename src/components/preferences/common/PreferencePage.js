import CheckCircle from "./CheckCircle";
import Header from "../../common/header/Header"
import "./preference.css"
import Footer from "../../common/footer/footer"
// import "./Preferences.css";
function PreferencePage() {
  return (
    <>
    <div>
      <Header />

      <CheckCircle />
      </div>

      <div className="footer-container-preference">
      <Footer />
      </div>
    </>
  );
}
export default PreferencePage;
