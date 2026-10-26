import {useState} from "react";
function StudentProfile(){
    const[visible,setVisible] = useState(false);
    const[Nom,setNom] = useState("");
    const[Filiere,setFiliere] = useState("");
    return(
        <div>
        <input
         type="text" 
         value={Nom}
         onChange={(e)=> setNom(e.target.value)}
         />

        <input 
        type="text" 
        value={Filiere}
        onChange={(e)=> setFiliere(e.target.value)}
        />
        {visible === true &&
        (
            <div>
                {Nom}
                {Filiere}
            </div>
        )
        }
        <button></button>
        </div>
    );
}
export default StudentProfile;
