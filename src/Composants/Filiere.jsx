function Filiere(){
    let nom = "chbaiboun";
    let stg = {nom:"chbaiboun" , prenom :"zineb" , age :20}
    let statut;
    if (stg.age >= 18) statut = "majeur";
    else statut = "mineur";
    let stylep = { fontstyle : "italic" , color : "red"};
    return (
        <div>
            <p>nom : {nom}</p>
            <p>nom : {stg.nom}</p>
            <p>prenom : {stg.prenom}</p>
            <p>age : {stg.age>=18 ? "majeur" : "mineur"}</p>
            <p>statut : {statut}</p>
        </div>

    );
}
export default Filiere ; 