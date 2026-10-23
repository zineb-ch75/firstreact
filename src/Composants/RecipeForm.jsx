import { useState, useEffect } from "react";

export default function RecipeForm(props) {
    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("Entrée");
    const [ingredients, setIngredients] = useState([""]);
    const [description, setDescription] = useState("");
    const [difficulte, setDifficulte] = useState(1);
    const [image, setImage] = useState("");

    useEffect(() => {
        if (props.recette) {
            setNom(props.recette.nom);
            setCategorie(props.recette.categorie);
            setIngredients([...props.recette.ingredients]);
            setDescription(props.recette.description);
            setDifficulte(props.recette.difficulte);
            setImage(props.recette.image || "");
        } else {
            setNom("");
            setCategorie("Entrée");
            setIngredients([""]);
            setDescription("");
            setDifficulte(1);
            setImage("");
        }
    }, [props.recette]);

    function ajouterIngredient() {
        setIngredients([...ingredients, ""]);
    }

    function modifierIngredient(index, valeur) {
        const nouvelleListe = [...ingredients];
        nouvelleListe[index] = valeur;
        setIngredients(nouvelleListe);
    }

    function supprimerIngredient(index) {
        setIngredients(
            ingredients.filter((ingredient, i) => i !== index)
        );
    }

    function choisirImage(e) {
        const fichier = e.target.files[0];

        if (fichier) {
            setImage(URL.createObjectURL(fichier));
        }
    }

    function enregistrer(e) {
        e.preventDefault();

        const recette = {
            id: props.recette ? props.recette.id : null,
            nom: nom.trim(),
            categorie,
            ingredients: ingredients
                .map((i) => i.trim())
                .filter((i) => i !== ""),
            description,
            difficulte: Number(difficulte),
            image
        };

        if (props.recette) {
            props.onModifier(recette);
        } else {
            props.onAjouter(recette);
        }
    }

    return (
        <div className="form_overlay">
            <form className="recipe_form" onSubmit={enregistrer}>
                <h2>
                    {props.recette
                        ? "Modifier la recette"
                        : "Nouvelle recette"}
                </h2>

                <label>Nom de la recette *</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />

                <label>Catégorie</label>
                <select
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                >
                    <option value="Entrée">Entrée</option>
                    <option value="Plat">Plat</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Boisson">Boisson</option>
                </select>

                <label>Ingrédients</label>

                {ingredients.map((ingredient, index) => (
                    <div className="ingredient_input" key={index}>
                        <input
                            type="text"
                            value={ingredient}
                            placeholder={`Ingrédient ${index + 1}`}
                            onChange={(e) =>
                                modifierIngredient(index, e.target.value)
                            }
                        />

                        <button
                            type="button"
                            onClick={() => supprimerIngredient(index)}
                        >
                            Supprimer
                        </button>
                    </div>
                ))}

                <button type="button" onClick={ajouterIngredient}>
                    + Ajouter un ingrédient
                </button>

                <label>Difficulté : {difficulte}/5</label>
                <input
                    type="range"
                    min="1"
                    max="5"
                    value={difficulte}
                    onChange={(e) => setDifficulte(e.target.value)}
                />

                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Décris ta recette..."
                />

                <label>Image de la recette</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={choisirImage}
                />

                {image && (
                    <img
                        src={image}
                        alt="Aperçu de la recette"
                        className="preview_image"
                    />
                )}

                <div className="form_buttons">
                    <button type="submit">
                        {props.recette
                            ? "Enregistrer"
                            : "Créer la recette"}
                    </button>

                    <button type="button" onClick={props.onAnnuler}>
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
}