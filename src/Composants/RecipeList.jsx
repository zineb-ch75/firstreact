import Recipeitem from "./RecipeItem";

export default function RecipeList(props) {
    return (
        <div className="container">
            {props.recipes.map((i) => (
                <Recipeitem
                    key={i.id}
                    recipe={i}
                    onModifier={props.onModifier}
                    onDupliquer={props.onDupliquer}
                    onSupprimer={props.onSupprimer}
                />
            ))}
        </div>
    );
}