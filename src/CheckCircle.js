import "./CheckCircle.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const axios = require('axios')

export async function createUser(data) {
  const response = await axios.post(
    `https://lecrimson-backend.herokuapp.com/profile`,
    { user: data }
  );
  return response.data;
}

function CheckCircle() {
  const [checkedValues, setValue] = useState([]);
  useEffect(() => {
    localStorage.setItem('lol', JSON.stringify(checkedValues));
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
    <div class="wrapper">
      <br />
      <br />
      <br />
      <br />
      <p class="heading-C">Choose your Interest</p>
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
              value="Health"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-heart-pulse"></i>
          </label>
          <p>Health</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Local"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-map"></i>
          </label>
          <p>Local</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Science"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-flask"></i>
          </label>
          <p>Science</p>
        </div>

        <div class="topics">
          <label class="container-I">
            <input
              type="checkbox"
              class="input"
              value="Technology"
              onChange={handleChange}
            />
            <span class="d_checkbox"></span>
            <i class="fas fa-microchip"></i>
          </label>
          <p>Technology</p>
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
        {/* {createUser(checkedValues)}; */}
        Save
      </button>
    </div>
  );
}
export default CheckCircle;