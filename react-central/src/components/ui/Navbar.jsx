import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/temperature">Temperature</Link>
        </li>
        <li>
          <Link to="/imc">IMC</Link>
        </li>

        <ul>
          <li>
            <Link to="/ageCalc">Age</Link>
          </li>
          <li>
            <Link to="/dice">Dice</Link>
          </li>
          <li>
            <Link to="/passwordGenerator">Password</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/bored">Bored</Link>
          </li>
          <li>
            <Link to="/meteo">Meteo</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/faussaire">Faussaire</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
