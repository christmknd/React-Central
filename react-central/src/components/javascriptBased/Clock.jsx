import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState("");

  const getTime = () => {
    const t = new Date();
    const month = t.toLocaleString("default", { month: "long" });
    const day = t.getDate();
    const hour = t.getHours();
    const minutes = t.getMinutes();
    const secondes = t.getSeconds();

    setCurrentTime(
      `Nous sommes le ${day} ${month}, il est ${hour}h${minutes}m${secondes}s`
    );
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div>
      <h2>Heure actuelle</h2>
      <button onClick={getTime}>Get Time</button>
      {currentTime && <p>{currentTime}</p>}
    </div>
  );
}

export default Clock;
