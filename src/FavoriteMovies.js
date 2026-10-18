
import React, { useState } from "react";

function FavoriteMovies() {
    const [movieName, setMovieName] = useState("");

    const [movies, setMovies] = useState([
        "Inception",
        "Interstellar",
        "The Dark Knight"
    ]);

    function ajouterFilm(e) {
        e.preventDefault();

        if (movieName.trim() === "") {
            return;
        }

        setMovies([...movies, movieName.trim()]);
        setMovieName("");
    }

    function supprimerFilm(index) {
        setMovies(movies.filter((film, i) => i !== index));
    }

    return (
        <div>
            <h2>Mes films préférés</h2>

            <form onSubmit={ajouterFilm}>
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
                <ul>
                    {movies.map((film, index) => (
                        <li key={index}>
                            {film}
                            {" "}
                            <button
                                onClick={() => supprimerFilm(index)}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FavoriteMovies;
