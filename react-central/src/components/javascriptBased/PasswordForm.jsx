import React, { useState } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?.,;/:+=[](){}-_@%^£#€";
    let result = "";

    for (let i = 0; i < 12; ++i) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(result);
  };

  return (
    <div data-testid="password-generator">
      <div>
        <h2>Mot de passe</h2>
        <button onClick={generatePassword} type="button">
          Générer
        </button>
      </div>
      <div>
        <p data-testid="password">{password}</p>
      </div>
    </div>
  );
}

export default PasswordForm;
