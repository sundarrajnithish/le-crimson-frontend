import "./CheckCircle.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckCircle() {
  const [checkedValues, setValue] = useState([]);

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
    <div class="wrapper">
      <p class="heading">Choose your Interest</p>
      <div class="sub_wrapper">
        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="World"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-globe"></i>
          </label>
          <p>World</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Business"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-suitcase"></i>
          </label>
          <p>Business</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Sports"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-baseball"></i>
          </label>
          <p>Sports</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Politics"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-landmark"></i>
          </label>
          <p>Politics</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Travel"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-umbrella-beach"></i>
          </label>
          <p>Travel</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Weather"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-cloud"></i>
          </label>
          <p>Weather</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Entertainment"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-tv"></i>
          </label>
          <p>Entertainment</p>
        </div>
      </div>
      <button className="Fav-button" onClick={route}>
        Save
      </button>
    </div>
  );
}
export default CheckCircle;
