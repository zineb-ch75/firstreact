///////////////ex1//////////////////
/*import React,{useState} from "react";
import "./App.css";

function App() {
  const [pseudo,setPseudo] = useState("");

  function modifierPseudo(e) {
    setPseudo(e.target.value);
  }

  return (
    <div>
      <h2> Gestion du pseudo</h2>
      <label>entrez votre pseudo :</label>

      <input
        type = "text"
        value = {pseudo}
        onChange = {modifierPseudo}
        maxLength={20}
      />

      <p className = {pseudo.length === 20? "rouge" : ""}>
        {pseudo.length} / 20 caracteres
      </p>

      <h3>
        Bonjour,{pseudo !== ""? pseudo : "anonyme"}!
      </h3>
    </div>
  );

}

export default App;*/

///////////////ex2///////
/*import React from "react";
import StudentProfile from "./StudentProfile";

function App(){
  return(
    <div>
      <StudentProfile/>
    </div>
  );
}

export default App;*/
///////////////ex3///////
/*import React from "react" ;
import ProductList from "./ProductList";

function App(){
  return(
    <div>
      <h1> Listes des produits</h1>
      <ProductList/>
    </div>
  );
}

export default App;*/
///////////////ex4//////////

/*import React from "react";
import ListeTaches from "./ListeTaches";

function App() {
    return (
        <div>
            <ListeTaches />
        </div>
    );
}

export default App;*/
/////////////ex5//////////

import React from "react";
import FavoriteMovies from "./FavoriteMovies";

function App() {
    return (
        <div>
            <FavoriteMovies />
        </div>
    );
}

export default App;


