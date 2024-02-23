import BankAccount from "../../components/libraryBased/BankAccount";
import Company from "../../components/libraryBased/Company";
import Identity from "../../components/libraryBased/Identity";

export default function Faussaire() {
  return (
    <div>
      <h2>Le Faussaire</h2>
      <p>
        La préservation et la confidentialité de ses informations personnelles
        sur Internet est aujourd'hui un véritable sujet <br />
        On ne souhaite pas forcement réveler ses données personnelles lorsque
        l'on a un formulaire à remplir <br />
        <strong>"Le faussaire"</strong>, notre site , est là pour répondre à ce
        problème. Il vous permet de générer des identités fictives , et bien
        plus encore
      </p>
      <BankAccount />
      <Company />
      <Identity />
    </div>
  );
}
