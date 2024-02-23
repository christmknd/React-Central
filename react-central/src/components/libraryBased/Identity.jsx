import React, { useState } from "react";
import { faker } from "@faker-js/faker";

function Identity() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");

  const generateid = () => {
    setPrenom(faker.person.firstName());
    setNom(faker.person.lastName());
    setTelephone(faker.helpers.replaceSymbolWithNumber("+33 06 ## ## ## ##"));
    setEmail(faker.internet.email());
    setPassword(faker.internet.password());
    setAdresse(faker.location.streetAddress() + "," + faker.location.city());
  };

  return (
    <div>
      <h2>Identité</h2>
      <div className="identityForm">
        <label htmlFor="identity">Génerer un fausse identité</label>
        <button onClick={generateid}>Créer</button>
      </div>
      <div className="result">
        <p>prénom : {prenom}</p>
        <p>nom : {nom}</p>
        <p>Téléphone : {telephone}</p>
        <p>email : {email}</p>
        <p>password : {password}</p>
        <p>adresse : {adresse}</p>
      </div>
    </div>
  );
}

export default Identity;
