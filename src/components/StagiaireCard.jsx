function StagiaireCard(props){
    return(
        <div>
            {props.stagiaire.nom} -- {props.stagiaire.prenom}
        </div>
    )
}

export default StagiaireCard;