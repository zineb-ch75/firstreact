import Stagiaire from './Composants/Stagiaire.jsx';
import Header from './Composants/Header.jsx';
import Nav from './Composants/Nav.jsx';
import NbHeure from './Composants/NbHeure.jsx';
import Filiere from './Composants/Filiere.jsx';

function App() {
    let nom = "zineb";
    let stg = {nom: "ellaghmich",prenom : "rania",groupe : "groupe 2", age : 18};
    let status;
    if (stg.age >=18){
      status = "majeur";

    }else {
      status = "mineur";
    }
    let stylez = {fontWeihgt : 700 ,margin : "1rem" ,backgroundColor : "lightpink",color : "wight",fontsize :"3rem" }
  return (
    <div style = {stylez}>
      <Stagiaire/>
      <p>nom : {nom}</p>
      <p>nom : {stg.nom}</p>
      <p>prenom : {stg.prenom}</p>
      <p>groupe : {stg.groupe}</p>
      <p>age : {stg.age}</p>
      <p>age : {stg.age>=18 ? "majeur" : "mineur"}</p>
      <p>statut : {status}</p>
      <Header/>
      <Nav/>
      <Filiere/>
      <NbHeure/>
    </div>
  );
}

export default App;



