
import { useState } from "react";

export default function FavoriteMovies() {

    // Stocker le nom du film saisi
    const [movieName, setMovieName] = useState("");

    // Liste des films
    const [movies, setMovies] = useState([
        "Inception",
        "Interstellar",
        "The Dark Knight"
    ]);

    // Ajouter un film
    function ajouter(e) {
        e.preventDefault();

        if (movieName.trim() !== "") {
            setMovies([...movies, movieName]);
            setMovieName("");
        }
    }

    // Supprimer un film
    function supprimer(film) {
        setMovies(movies.filter((i) => i !== film));
    }

    return (
        <div>
            <h2>Mes films préférés</h2>

            <form onSubmit={ajouter}>
                <input
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    placeholder="Nom du film"
                />

                <button type="submit">Ajouter</button>
            </form>

            {movies.length === 0 ? (
                <p>Votre liste de favoris est vide</p>
            ) : (
                movies.map((i, index) => (
                    <div key={index}>
                        <span>{i}</span>
                        <button onClick={() => supprimer(i)}>
                            Supprimer
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
