import {useState} from "react";
function StudentProfile(){
    const[visible,setVisible] = useState(false);
    const[Nom,setNom] = useState("");
    const[Filiere,setFiliere] = useState("");
    return(
        <div>
            <label>nom :</label>
        <input
         type="text" 
         placeholder="nom"
         value={Nom}
         onChange={(e)=> setNom(e.target.value)}
         />
        <label>filiere :</label>
        <input 
        type="text" 
        placeholder="filiere"
        value={Filiere}
        onChange={(e)=> setFiliere(e.target.value)}
        />
        {visible === true ?
        (
            <div>
                <p> NOM : {Nom}</p>
                <p> filiere :{Filiere}</p>
            </div>
        ):(<p>les informations sont masquees</p>)
    }<button onClick={()=>setVisible(!visible)}>
        {visible? "masquer mon profile":"afficher mon profile"}
    </button>
        </div>
    );
}
export default StudentProfile;
