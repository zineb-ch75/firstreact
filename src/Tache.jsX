export default function Tache(props) {
    return (
        <div>
            <span style={{
                textDecoration: props.tache.statut
                    ? "line-through"
                    : "none"
            }}>
                {props.tache.texte}
            </span>
            <input type="checkbox" />
            <button>Supprimer</button>
        </div>
    );
}