import React, { Component } from "react";
import { render } from "react-dom";



  function Location() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude & Longitude :", [position.coords.latitude, position.coords.longitude]);
      localStorage.setItem('location-coordinates', [position.coords.latitude, position.coords.longitude]);
    });
  


    return (
      <div>
        <h4>Location Fetched</h4>
      </div>
    );

}

export default Location;