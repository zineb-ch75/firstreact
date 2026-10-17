function EditStagiaire(props){
    const [stagiaire, setStagiaire]= useState(props.stagiaire)
    const [nom, setNom]= useState(stagiaire.nom)
    return (
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

    );
}
export default EditStagiaire;