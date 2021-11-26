import React, { useCallback, useEffect } from "react";
import Movie from "./Movie";
import Loading from "./Loading";
// import { useGlobalContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading, setMovies } from "../redux/action";

const MovieList = () => {
    // const { loading, movies } = useGlobalContext();
    const { loading, movies, search } = useSelector((state) => state);
    const dispatch = useDispatch();
    const url =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=495929e07087fc60f588e4637b6e89ad&page=1%22";

    const searchUrl =
        "https://api.themoviedb.org/3/search/movie?api_key=495929e07087fc60f588e4637b6e89ad&query=";

    const fetchData = useCallback(async () => {
        dispatch(toggleLoading(true));
        try {
            let res = await fetch(`${url + search}`);
            if (search.trim() !== "") {
                // const res = await fetch(`${url + searchInput}`);
                res = await fetch(`${searchUrl + search}`);
            }

            const data = await res.json();

            const { results } = data;
            // console.log(drinks);
            if (results) {
                const newmovies = results.map((movie) => {
                    const {
                        id,
                        title: name,
                        vote_average: vote,
                        poster_path: poster,
                        release_date: info,
                    } = movie;

                    const image = poster
                        ? "https://image.tmdb.org/t/p/w500" + poster
                        : null;

                    // console.log(drink);

                    return {
                        id,
                        name,
                        vote,
                        image,
                        info,
                    };
                });
                dispatch(setMovies(newmovies));
            } else {
                dispatch(setMovies([]));
            }
            // console.log(drinks);
            dispatch(toggleLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(toggleLoading(false));
        }
    }, [search, dispatch]);

    useEffect(() => {
        fetchData();
    }, [search, fetchData]);

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
