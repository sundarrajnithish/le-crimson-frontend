import React, { useState } from "react";
import "./Checkbox.css";
function Checkbox() {
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

  return (
    <div className="container-C">
      <div className="frame-C">
        <div>
          <br></br>
          <input type="checkbox" value="World" onChange={handleChange} />
          {"    "}World
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Sports" onChange={handleChange} />
          {"    "} Sports
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Business" onChange={handleChange} />
          {"    "}
          Business
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Future" onChange={handleChange} />
          {"    "}
          Future
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Lifestyle" onChange={handleChange} />
          {"    "}
          Lifestyle
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Culture" onChange={handleChange} />
          {"    "}
          Culture
        </div>
        <div>
          <br></br>
          <input type="checkbox" value="Health" onChange={handleChange} />
          {"    "}
          Health
        </div>
        <div>
          <br></br>
          <input
            type="checkbox"
            value="Entertainment"
            onChange={handleChange}
          />
          {"    "} Entertainment
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
