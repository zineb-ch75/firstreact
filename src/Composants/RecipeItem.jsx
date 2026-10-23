export default function Recipeitem(props) {
    const recipe = props.recipe;

    return (
        <div className="recipe_card">
            {recipe.image && (
                <img src={recipe.image} alt={recipe.nom} />
            )}

            <h3>{recipe.nom}</h3>

            <span className="categorie">{recipe.categorie}</span>

            <p>{recipe.description}</p>

            <h4>Ingrédients :</h4>

            <div className="ingredi_list">
                {recipe.ingredients.map((ing, index) => (
                    <span key={index}>{ing}</span>
                ))}
            </div>

            <p>Difficulté : {recipe.difficulte}/5</p>
            <p>Créée : {recipe.date}</p>

            <div className="butt">
                <button onClick={() => props.onModifier(recipe)}>
                    Modifier
                </button>

                <button onClick={() => props.onDupliquer(recipe)}>
                    Dupliquer
                </button>

                <button onClick={() => props.onSupprimer(recipe.id)}>
                    Supprimer
                </button>
            </div>
        </div>
    );
}