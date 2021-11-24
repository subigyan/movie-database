import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=495929e07087fc60f588e4637b6e89ad&page=1%22";

const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=495929e07087fc60f588e4637b6e89ad&query=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            let res = await fetch(`${url + searchInput}`);
            if (searchInput.trim() !== "") {
                // const res = await fetch(`${url + searchInput}`);
                res = await fetch(`${searchUrl + searchInput}`);
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
                setMovies(newmovies);
            } else {
                setMovies([]);
            }
            // console.log(drinks);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchInput]);

    useEffect(() => {
        fetchData();
    }, [searchInput, fetchData]);

    return (
        <AppContext.Provider
            value={{ loading, movies, setSearchInput, setLoading }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
