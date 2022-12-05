import "./CheckCircle.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CheckCircle() {
  let db_preferences = localStorage.getItem('login-db-preferences')
  const [checkedValues, setValue] = useState([]);
  useEffect(() => {
    localStorage.setItem('live-preferences', JSON.stringify(checkedValues));
  }, [checkedValues]);

  function handleChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setValue((pre) => [...pre, value]);
    } else
      setValue((pre) => {
        return [...pre.filter((fav) => fav !== value)];
      });
  }

  console.log(checkedValues);

  let navigate = useNavigate();
  const route = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <div className="wrapper">
      <p className="heading-C">Choose your Interest</p>
      {/* <h2>Your Stored Preferences: {db_preferences}</h2> */}
      <h2>Your Current Preferences: {"["+checkedValues+"]"}</h2>
      <div className="sub_wrapper">
        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="World"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-globe"></i>
          </label>
          <p>World</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Business"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-suitcase"></i>
          </label>
          <p>Business</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Sports"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-baseball"></i>
          </label>
          <p>Sports</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Politics"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-landmark"></i>
          </label>
          <p>Politics</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Health"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-heart-pulse"></i>
          </label>
          <p>Health</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Local"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-map"></i>
          </label>
          <p>Local</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Science"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-flask"></i>
          </label>
          <p>Science</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Technology"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-microchip"></i>
          </label>
          <p>Technology</p>
        </div>

        <div className="topics">
          <label className="container-I">
            <input
              type="checkbox"
              className="input"
              value="Entertainment"
              onChange={handleChange}
            />
            <span className="d_checkbox"></span>
            <i className="fas fa-tv"></i>
          </label>
          <p>Entertainment</p>
        </div>
      </div>
      <button className="Fav-button" onClick={route}>
        {localStorage.setItem('login-db-preferences', checkedValues)}
        Save
      </button>
    </div>
  );
}
export default CheckCircle;