import { Link } from "react-router-dom";

export default function Navbar () {

    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ageCalc">Age Calculator</Link></li>
                <li><Link to="/bored">Bored App</Link></li>
                <li><Link to="/hauteCouture"> Haute Couture</Link></li>
                <li><Link to="/parapluie">Parapluie App</Link></li>
                <li><Link to="/passwordGenerator">Password Generator</Link></li>
            </ul>
        </nav>
        </>
    )
}