import React, { useState } from "react";
import axios from "axios";

function SearchCity() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false); // État pour indiquer si la recherche a été effectuée ou non
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchCity = () => {
    if (!city) {
      setErrorMessage("Veuillez entrer le nom d'une ville");
      return;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      )
      .then((response) => {
        setData(response.data);
        setSearched(true); // Marquer la recherche comme effectuée
        setErrorMessage(""); // Réinitialiser le message d'erreur
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("La ville spécifiée n'a pas été trouvée");
      });
  };

  const parapluie = (description) => {
    return description.toLowerCase() === "clear sky"
      ? "Pas de soucis , vous n'en aurez pas besoin"
      : "Faites attention , vous en aurez peut être besoin";
  };

  const needAnUmbrella = data.weather
    ? parapluie(data.weather[0].description)
    : "";

  return (
    <div className="search-card">
      <h3>Est-ce que vous devriez prendre votre parapluie aujourd'hui ?</h3>
      <div>
        <input
          type="text"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
            setErrorMessage(""); // Réinitialiser le message d'erreur lorsque le champ de saisie est modifié
          }}
        />
        <button onClick={searchCity}>Entrer</button>
      </div>
      <div className="result">
        <div className="city">
          <p>Ville : {data.name}</p>
        </div>
        <div className="temp">
          {data.main && <p>{data.main.temp.toFixed()}°C</p>}
        </div>
        <div className="ciel">
          {data.weather && (
            <p>
              {data.weather[0].main} - {data.weather[0].description}
            </p>
          )}
        </div>
        <div className="icon">
          {data.weather && (
            <img
              alt="weather"
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            />
          )}
        </div>
        <div>{needAnUmbrella}</div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SearchCity;
