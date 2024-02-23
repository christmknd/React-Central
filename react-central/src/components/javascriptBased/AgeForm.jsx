import React, { useState } from "react";

function AgeForm() {
  const [yearsSinceBirth, setYearsSinceBirth] = useState("");
  const [monthsSinceBirth, setMonthsSinceBirth] = useState("");
  const [daysSinceBirth, setDaysSinceBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const dateOfBirth = new Date(event.target.elements.dateNaissance.value);
    if (!dateOfBirth) {
      console.log("Veuillez renseigner une date de naissance valide.");
      return;
    }

    const today = new Date();
    const yearDifference = today.getFullYear() - dateOfBirth.getFullYear();
    setYearsSinceBirth(yearDifference);

    const monthDifference =
      yearDifference * 12 + (today.getMonth() - dateOfBirth.getMonth());
    setMonthsSinceBirth(monthDifference);

    const dayDifference = Math.floor(
      (today - dateOfBirth) / (1000 * 60 * 60 * 24)
    );
    setDaysSinceBirth(dayDifference);
  };

  return (
    <div data-testid="age-form">
      <form onSubmit={handleSubmit}>
        <label>
          Entrez votre date de naissance :
          <input
            type="date"
            name="dateNaissance"
            data-testid="dateNaissance"
            required
          />
        </label>
        <button type="submit">Calculer</button>
      </form>

      <p data-testid="yearsSinceBirth">{yearsSinceBirth} ans</p>
      <p data-testid="monthsSinceBirth">
        {monthsSinceBirth} mois sont passés depuis le jour de votre naissance
      </p>
      <p data-testid="daysSinceBirth">Il s'est écoulé {daysSinceBirth} jours</p>
    </div>
  );
}

export default AgeForm;
