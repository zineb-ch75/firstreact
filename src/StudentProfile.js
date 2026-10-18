import React, {useState} from "react";

function StudentProfile(){
    const [isvisible , setIsvisible] = useState(false);

    function afficherProfil(){
        setIsvisible(!isvisible);
    }

    return(
        <div>
            <button onClick={afficherProfil}>
                {isvisible ? "masquer mon profile" : "afficher mon profile"}
            </button>
            {isvisible ? (
            <div>
                <p> Nom : Zineb</p>
                <p> Filiere : Developpement digital</p>
            </div>
            ):(
                <p> Les informations sont masquees</p>
            )
            }
        </div>
    );
}

export default StudentProfile;