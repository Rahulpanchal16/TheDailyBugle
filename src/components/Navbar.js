import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyWeatherImage from "./113.png";

const Navbar = () => {
  let weatherapikey = process.env.REACT_APP_WEATHER_KEY;

  const [temp, setTemp] = useState("");

  const weatherFunc = async () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${weatherapikey}&q=pune&aqi=yes;`;
    let data = await fetch(url);
    let result = await data.json();
    setTemp(result.current.temp_c);
  };

  useEffect(() => {
    weatherFunc();
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          The Daily Bugle
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <li
            className="nav-item text-end text-white"
            style={{ listStyleType: "none" }}
          >
            Mumbai: {temp} &#8451;
            <Link to="https://www.weatherapi.com/" title="Free Weather API">
              <img
                src={MyWeatherImage}
                alt="Weather data by WeatherAPI.com"
                border="0"
                width={50}
                height={50}
              />
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
