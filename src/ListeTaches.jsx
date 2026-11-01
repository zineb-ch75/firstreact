import { useState } from "react";

export default function ListeTaches() {
    const [taches, setTaches] = useState([
        { id: 1, texte: "holaa", statut: false },
        { id: 2, texte: "bienvenida", statut: true }
    ]);


    const [nvtaches, setNvtaches] = useState("");

    function ajouter(e) {
        e.preventDefault();

        if (nvtaches.trim() !== "") {
            setTaches([...taches, nvtaches]);
            setNvtaches("");
        }
    }

    return (
        <div>
            <form onSubmit={ajouter}>
                <input
                    type="text"
                    value={nvtaches}
                    onChange={(e) => setNvtaches(e.target.value)}
                />
                <button type="submit">Ajouter une tâche</button>
            </form>

            {taches.map((i) => (
            <Tache key={i.id} tache={i} />
            ))}
        </div>
    );
}