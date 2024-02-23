import React, { useState } from "react";

export default function IMCCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(null);

  const calculateBMI = (event) => {
    event.preventDefault();

    const parsedHeight = parseInt(String(height));
    const parsedWeight = parseInt(String(weight));

    if (isNaN(parsedHeight) || parsedHeight <= 0) {
      setResult("Entrez une taille valide!");
    } else if (isNaN(parsedWeight) || parsedWeight <= 0) {
      setResult("Entrez un poids valide!");
    } else {
      const bmi = (
        parsedWeight /
        ((parsedHeight * parsedHeight) / 10000)
      ).toFixed(2);

      if (bmi < 18.6) setResult(`Insuffisance pondérale : ${bmi}`);
      else if (bmi >= 18.6 && bmi < 24.9)
        setResult(`Corpulence normale : ${bmi}`);
      else setResult(`Surpoids: ${bmi}`);
    }
  };

  return (
    <div className="container">
      <h2>IMC Calculator</h2>

      <form onSubmit={calculateBMI}>
        <label htmlFor="height">Taille (en cm)</label>
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
        />

        <label htmlFor="weight">Poids (en kg)</label>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="text"
        />

        <button className="calculate-button">Calculer</button>

        <div className="result">
          <span>{result !== null && <p>{result}</p>}</span>
        </div>
      </form>
    </div>
  );
}
