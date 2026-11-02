export default function PasDecrementation(props) {
    return (
        <fieldset>
            <legend>Pas de décrémentation</legend>

            {[1, 2, 3, 4].map((pas) => (
                <button onClick={() => props.decrementer(pas)}>
                    {pas}
                </button>
            ))}
        </fieldset>
    );
}