import { useEffect, useState } from "react";
import axios from "axios";

export default function BoredApp() {
  const [activity, setActivity] = useState("");

  useEffect(() => {}, []);

  const findanActivity = async () => {
    try {
      const ifindit = await axios.get("http://www.boredapi.com/api/activity/");
      setActivity(ifindit.data.activity);
    } catch (error) {
      console.log(error);
    }
  };

  const generateActivity = (e) => {
    e.preventDefault(); // Empêche le formulaire de se soumettre
    findanActivity();
  };

  return (
    <div>
      <form action="" method="post">
        <h2>Search a random thing to do </h2>
        <label htmlFor="activity"></label>
        <button onClick={generateActivity} type="submit">
          Let's Go ! Find it!
        </button>
      </form>

      <div className="result-div">
        <h3>This is what you can do ...</h3>
        {activity && <p>{activity}</p>}
      </div>
    </div>
  );
}
