import {useState} from "react";
function Pseudo(){
    const 
    [Pseudo , setPseudo] = useState("");
    
    return(
        <div>
        <h3>Mon Pseudo</h3>
        <input 
        type="text"
        value={Pseudo}
        maxLength={20}
        placeholder="entrez votre pseudo"
        onChange={(e)=>setPseudo(e.target.value)}
        />
        <p style ={{
            color:Pseudo.length === 20 ? "red":"black"
        }}>
            {Pseudo.length}/20 caracteres 
        </p>
        </div>
        
    );
}
export default Pseudo;