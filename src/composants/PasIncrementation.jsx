export default function PasIncrementation(props) {
    return (
        <fieldset>
            <legend>Pas d'incrémentation</legend>

            {[1, 2, 3, 4].map((pas) => (
                <button onClick={() => props.incrementer(pas)}>
                    {pas}
                </button>
            ))}
        </fieldset>
    );
}