import React, { useState } from "react";
import axios from "axios";

function SearchCity() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={fr}`;
  //units=metric => celsius
  const searchCity = (event) => {
    axios.get(apiUrl).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setCity("");
  };

  function parapluie(description) {
    return description.toLowerCase() === "clear sky"
      ? "Pas de soucis , vous n'en aurez pas besoin"
      : "Faites attention , vous en aurait peut être besoin";
  }

  const needAnUmbrella = data.weather
    ? parapluie(data.weather[0].description)
    : "";

  return (
    <div className="search-card">
      <h3>Est ce que vous devriez prendre votre parapluie aujourd'hui ?</h3>
      <div>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={searchCity} type="submit">
          Entrer
        </button>
      </div>
      <div className="result">
        <div className="city">
          <p>Ville : {data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
        </div>
        <div className="ciel">
          {data.weather ? (
            <p>
              {data.weather[0].main} - {data.weather[0].description}
            </p>
          ) : null}
        </div>
        <div className="icon">
          {data.weather ? (
            <img
              alt="weather"
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            />
          ) : null}
        </div>
        <div>{needAnUmbrella}</div>
      </div>
    </div>
  );
}

export default SearchCity;
