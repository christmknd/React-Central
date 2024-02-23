import { useState } from "react";

export default function TemperatureForm() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [ctof, setCtof] = useState(null);
  const [ftoc, setFtoc] = useState(null);

  const celsiusToFahrenheit = (event) => {
    event.preventDefault();
    if (celsius > 0) {
      setCtof(celsius * 1.8 + 32);
    }
  };

  const fahrenheitToCelsius = (event) => {
    event.preventDefault();
    setFtoc((fahrenheit - 32) / 1.8);
  };

  return (
    <div className="container">
      <h2>Temperature</h2>

      <div className="celsius">
        <form onSubmit={celsiusToFahrenheit}>
          <label htmlFor="celsius">Celsius to Fahrenheit</label>
          <input
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            type="text"
          />
          <button className="conversion-celsius" type="submit">
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
        <form onSubmit={fahrenheitToCelsius}>
          <label className="fahreinheit">Fahrenheit to Celsius</label>
          <input
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            type="text"
          />
          <button className="conversion-fahr" type="submit">
            Convertir
          </button>
          <br />
          <br />
          <div className="celsius-result">
            <span>{ftoc !== null && <p>Temperature : {ftoc} Celsius</p>}</span>
          </div>
        </form>
      </div>
    </div>
  );
}
