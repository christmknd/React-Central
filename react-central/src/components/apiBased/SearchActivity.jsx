import React, { useState } from "react";
import axios from "axios";

function BoredApp() {
  const [activity, setActivity] = useState("");
  const [searched, setSearched] = useState(false);

  const findanActivity = async () => {
    try {
      const ifindit = await axios.get("https://www.boredapi.com/api/activity/");
      setActivity(ifindit.data.activity);
    } catch (error) {
      console.log(error);
    }
  };

  const generateActivity = () => {
    findanActivity();
    setSearched(true); //
  };

  return (
    <div>
      <div>
        <h2>Search a random thing to do </h2>
        <button onClick={generateActivity}>Let's Go ! Find it!</button>
      </div>

      <div className="result-div">
        <h3>This is what you can do ...</h3>
        {searched && <p>{activity}</p>}{" "}
        {/* Afficher l'activité si la recherche a été effectuée */}
      </div>
    </div>
  );
}

export default BoredApp;
