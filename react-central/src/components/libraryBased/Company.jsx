import React, { useState } from "react";
import { fakerFR as faker } from "@faker-js/faker";

function Company() {
  const [raison_sociale, setRaison_sociale] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [siren, setSiren] = useState("");
  const [siret, setSiret] = useState("");

  const generateCie = () => {
    const nine = Math.floor(
      Math.random() * (999999999 - 100000000) + 100000000
    );
    const five = Math.floor(Math.random() * (99999 - 10000) + 10000);

    setRaison_sociale(faker.company.name());
    setAdresse(faker.location.streetAddress() + "," + faker.location.city());
    setTelephone(faker.string.numeric(10));
    setSiren(nine);
    setSiret(nine + "" + five);
  };

  return (
    <div>
      <h2>Entreprise</h2>
      <div className="companyForm">
        <label htmlFor="company">Génerer un entreprise fictive</label>
        <button onClick={generateCie}>Créer</button>
      </div>
      <div className="result">
        <p>Raison sociale : {raison_sociale}</p>
        <p>Adresse : {adresse}</p>
        <p>Téléphone : {telephone}</p>
        <p>Siren : {siren}</p>
        <p>Siret : {siret}</p>
      </div>
    </div>
  );
}

export default Company;
