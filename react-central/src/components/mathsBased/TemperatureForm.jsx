import React, { useState } from "react";

export default function TemperatureForm() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [ctof, setCtof] = useState(null);
  const [ftoc, setFtoc] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur

  const celsiusToFahrenheit = (event) => {
    event.preventDefault();
    if (isNaN(celsius) || celsius === "") {
      setErrorMessage("Veuillez entrer une valeur numérique pour Celsius");
      return;
    }

    setErrorMessage(""); // Réinitialiser le message d'erreur s'il n'y a pas d'erreur
    setCtof(celsius * 1.8 + 32);
  };

  const fahrenheitToCelsius = (event) => {
    event.preventDefault();
    if (isNaN(fahrenheit) || fahrenheit === "") {
      setErrorMessage("Veuillez entrer une valeur numérique pour Fahrenheit");
      return;
    }

    setErrorMessage(""); // Réinitialiser le message d'erreur s'il n'y a pas d'erreur
    setFtoc((fahrenheit - 32) / 1.8);
  };

  return (
    <div className="container">
      <h2>Temperature</h2>

      <div className="celsius">
        <form>
          <label htmlFor="celsius">Celsius to Fahrenheit</label>
          <input
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            type="text"
          />
          <button className="conversion-celsius" onClick={celsiusToFahrenheit}>
            Convertir
          </button>
          <br />
          <br />
          <div className="fahr-result">
            <span>
              {ctof !== null && <p>Temperature : {ctof} Fahrenheit</p>}
            </span>
          </div>
        </form>
      </div>

      <div className="fahreinheit">
        <form>
          <label className="fahreinheit">Fahrenheit to Celsius</label>
          <input
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            type="text"
          />
          <button className="conversion-fahr" onClick={fahrenheitToCelsius}>
            Convertir
          </button>
          <br />
          <br />
          <div className="celsius-result">
            <span>{ftoc !== null && <p>Temperature : {ftoc} Celsius</p>}</span>
          </div>
        </form>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
