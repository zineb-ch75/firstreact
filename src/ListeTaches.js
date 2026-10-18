
import React, { useState } from "react";
import Tache from "./Tache";

function ListeTaches() {
    const [taches, setTaches] = useState([
        { id: 5, texte: "Maîtriser UML", terminee: true },
        { id: 7, texte: "Réviser JS", terminee: false }
    ]);

    const [nouvelleTache, setNouvelleTache] = useState("");

    function ajouterTache(e) {
        e.preventDefault();

        if (nouvelleTache.trim() === "") {
            return;
        }

        const tache = {
            id: Date.now(),
            texte: nouvelleTache.trim(),
            terminee: false
        };

        setTaches([...taches, tache]);
        setNouvelleTache("");
    }

    function basculerTache(id) {
        setTaches(
            taches.map((t) =>
                t.id === id
                    ? { ...t, terminee: !t.terminee }
                    : t
            )
        );
    }

    function supprimerTache(id) {
        setTaches(
            taches.filter((t) => t.id !== id)
        );
    }

    const restantes = taches.filter(
        (t) => !t.terminee
    ).length;

    return (
        <div>
            <h2>Gestion des tâches</h2>

            <form onSubmit={ajouterTache}>
                <input
                    type="text"
                    value={nouvelleTache}
                    onChange={(e) => setNouvelleTache(e.target.value)}
                    placeholder="Nouvelle tâche"
                />

                <button type="submit">Ajouter</button>
            </form>

            {taches.length === 0 ? (
                <p>Aucune tâche pour le moment</p>
            ) : (
                <div>
                    {taches.map((t) => (
                        <Tache
                            key={t.id}
                            tache={t}
                            basculerTache={basculerTache}
                            supprimerTache={supprimerTache}
                        />
                    ))}
                </div>
            )}

            <p>
                {restantes} tâche(s) restante(s) sur {taches.length}
            </p>
        </div>
    );
}

export default ListeTaches;
