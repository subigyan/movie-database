import React from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MovieList = () => {
    const { loading, movies } = useGlobalContext();
    // console.log(movies);
    if (loading) return <Loading />;
    if (movies.length === 0)
        return <h2 className="section-title">Not Found</h2>;

    return (
        <section className="section">
            <h2 className="section-title">Movie</h2>
            <div className="movies-center">
                {movies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />;
                })}
            </div>
        </section>
    );
};

export default MovieList;
