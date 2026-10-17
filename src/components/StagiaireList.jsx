import { useState } from 'react';
import StagiaireCard from './StagiaireCard';

function StagiaireList() {
    let liste = [
        {
            id: 1,
            nom: 'Ellaghmich',
            prenom: 'Rania',
            filiere: 'dev'
        },
        {
            id: 2,
            nom: 'Chbaiboun',
            prenom: 'Zineb',
            filiere: 'dev'
        }
    ];

    const [stagiaires, setStagiaires] = useState(liste);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [filiere, setFiliere] = useState("");
    const [isAdd, setIsAdd] = useState(false);

    function addNewStag(event) {
        event.preventDefault();

        let idF = stagiaires.length + 1;

        let stag = {
            id: idF,
            nom: nom,
            prenom: prenom,
            filiere: filiere
        };

        setStagiaires(liste => [...liste, stag]);

        setIsAdd(false);
        setNom("");
        setPrenom("");
        setFiliere("");
    }
    function suppStg(params){
        setStagiaires(stag =>stag.filter((stg) => stg.id!== params))
    }
    return (
        <div>
            La liste des stagiaires :

            {!isAdd ? (
                <button onClick={() => setIsAdd(true)}>
                    Creer un Stagiaire
                </button>
            ) : (
                <form onSubmit={addNewStag}>
                    <div>
                        Nom :
                        <input
                            type="text"
                            value={nom}
                            onChange={e => setNom(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        Prenom :
                        <input
                            type="text"
                            value={prenom}
                            onChange={e => setPrenom(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        Filiere :
                        <input
                            type="text"
                            value={filiere}
                            onChange={e => setFiliere(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Enregistrer</button>
                </form>
            )}

            {stagiaires.map((stag) => (
                <span key={stag.id}>
                    <StagiaireCard stagiaire={stag} />

                    <button onClick={() => suppStg(stag.id)}> Supprimer</button>
                </span>

            ))}
        </div>
    );
}

export default StagiaireList;