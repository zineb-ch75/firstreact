import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeFilter from "./RecipeFilter";
import RecipeForm from "./RecipeForm";
import Pagination from "./pagination";
import Aide from "./Aide";

export default function MainPage() {
    const [Recipes, setRecipes] = useState([
        {
            id: 1,
            nom: "Tacos méditerranéens",
            categorie: "Plat",
            description: "Tacos légers et parfumés.",
            ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
            difficulte: 4,
            date: "11/19/2025, 12:47:37 PM",
            image: ""
        },
        {
            id: 2,
            nom: "Smoothie mangue",
            categorie: "Boisson",
            description: "Boisson fraîche et fruitée.",
            ingredients: ["Mangue", "Lait d'amande", "Miel"],
            difficulte: 2,
            date: "11/18/2025, 12:47:37 PM",
            image: ""
        }
    ]);

    const [Recherch, setRecherch] = useState("");
    const [Selec, setSelec] = useState("");
    const [Form, setForm] = useState(false);
    const [EditingRecipe, setEditingRecipe] = useState(null);

    const [pageActuelle, setPageActuelle] = useState(1);
    const recettesParPage = 4;

    const filterRecipes = Recipes.filter((i) =>
        i.nom.toLowerCase().includes(Recherch.toLowerCase()) &&
        (Selec === "" || i.categorie === Selec)
    );

    const totalPages = Math.ceil(
        filterRecipes.length / recettesParPage
    );

    const indexDerniereRecette = pageActuelle * recettesParPage;
    const indexPremiereRecette = indexDerniereRecette - recettesParPage;

    const recettesAffichees = filterRecipes.slice(
        indexPremiereRecette,
        indexDerniereRecette
    );

    useEffect(() => {
        setPageActuelle(1);
    }, [Recherch, Selec]);

    useEffect(() => {
        if (totalPages > 0 && pageActuelle > totalPages) {
            setPageActuelle(totalPages);
        }
    }, [totalPages, pageActuelle]);

    function ajouterRecette(recette) {
        const nouvelleRecette = {
            ...recette,
            id: Date.now(),
            date: new Date().toLocaleString()
        };

        setRecipes((anciennes) => [...anciennes, nouvelleRecette]);
        setForm(false);
        setEditingRecipe(null);
        setPageActuelle(1);
    }

    function modifierRecette(recetteModifiee) {
        setRecipes((anciennes) =>
            anciennes.map((i) =>
                i.id === recetteModifiee.id
                    ? {
                        ...i,
                        ...recetteModifiee,
                        date: i.date
                    }
                    : i
            )
        );

        setForm(false);
        setEditingRecipe(null);
    }

    function dupliquerRecette(recette) {
        const copie = {
            ...recette,
            id: Date.now(),
            nom: recette.nom + " (copie)",
            ingredients: [...recette.ingredients],
            date: new Date().toLocaleString()
        };

        setRecipes((anciennes) => [...anciennes, copie]);
        setPageActuelle(1);
    }

    function supprimerRecette(id) {
        setRecipes((anciennes) =>
            anciennes.filter((i) => i.id !== id)
        );
    }

    function ouvrirModification(recette) {
        setEditingRecipe(recette);
        setForm(true);
    }

    function ouvrirCreation() {
        setEditingRecipe(null);
        setForm(true);
    }

    function fermerFormulaire() {
        setForm(false);
        setEditingRecipe(null);
    }

    return (
        <div className="main_page">
            <h1>Creative Recipe Builder</h1>

            <RecipeFilter
                Recherch={Recherch}
                setRecherch={setRecherch}
                Selec={Selec}
                setSelec={setSelec}
            />

            <button onClick={ouvrirCreation}>
                Créer une nouvelle recette
            </button>

            {Form && (
                <RecipeForm
                    recette={EditingRecipe}
                    onAjouter={ajouterRecette}
                    onModifier={modifierRecette}
                    onAnnuler={fermerFormulaire}
                />
            )}

            <RecipeList
                recipes={recettesAffichees}
                onModifier={ouvrirModification}
                onDupliquer={dupliquerRecette}
                onSupprimer={supprimerRecette}
            />

            <Pagination
                pageActuelle={pageActuelle}
                setPageActuelle={setPageActuelle}
                totalPages={totalPages}
            />

            <Aide />
        </div>
    );
}