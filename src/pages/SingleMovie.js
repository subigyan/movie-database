import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
// import { useGlobalContext } from "../context";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "../redux/action";
const SingleMovie = () => {
    // const { loading, setLoading } = useGlobalContext();
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    const { id } = useParams();

    const [movie, setmovie] = useState(null);

    useEffect(() => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=495929e07087fc60f588e4637b6e89ad`;
        async function getData() {
            dispatch(toggleLoading(true));
            try {
                const res = await fetch(movieUrl);
                const data = await res.json();
                console.log(data);

                if (data) {
                    const {
                        id,
                        title: name,
                        vote_count,
                        vote_average,
                        release_date,
                        revenue,
                        budget,
                        poster_path: poster,
                        popularity,
                        genres,
                    } = data;

                    const image = poster
                        ? "https://image.tmdb.org/t/p/w500" + poster
                        : null;

                    const newmovie = {
                        id,
                        name,
                        vote_count,
                        vote_average,
                        release_date,
                        revenue,
                        budget,
                        image,
                        popularity,
                        genres,
                    };

                    setmovie(newmovie);
                } else {
                    setmovie(null);
                }
            } catch (error) {
                console.log(error);
            }
            dispatch(toggleLoading(false));
        }
        getData();
    }, [id, dispatch]);

    if (loading) return <Loading />;
    if (!movie) return <h1 className="section-title">Not Found</h1>;

    const {
        name,
        budget,
        image,
        popularity,
        genres,
        vote_count,
        vote_average,
        release_date,
        revenue,
    } = movie;
    return (
        <div>
            <div className="section movie-section">
                <h2 className="section-title">{name}</h2>
                <div className="drink">
                    <img src={image} alt={name}></img>
                    <div className="drink-info">
                        <p>
                            <span className="drink-data">Name :</span>
                            {name}
                        </p>
                        <p>
                            <span className="drink-data">Genre :</span>
                            {genres.map((genre, index) => {
                                return (
                                    <span key={index}>
                                        {index === 0
                                            ? genre.name
                                            : ", " + genre.name}
                                    </span>
                                );
                            })}
                        </p>
                        <p>
                            <span className="drink-data">Vote Count :</span>
                            {vote_count === 0 ? "Unavailable" : vote_count}
                        </p>
                        <p>
                            <span className="drink-data">Vote Average :</span>
                            {vote_average === 0 ? "Unavailable" : vote_average}
                        </p>

                        <p>
                            <span className="drink-data">Release Date :</span>
                            {release_date}
                        </p>
                        <p>
                            <span className="drink-data">budget :</span>
                            {budget === 0 ? "Unavailable" : budget}
                        </p>
                        <p>
                            <span className="drink-data">Revenue :</span>
                            {revenue === 0 ? "Unavailable" : revenue}
                        </p>

                        <p>
                            <span className="drink-data">Popularity :</span>
                            {popularity}
                        </p>
                    </div>
                </div>
                <Link className="btn btn-primary" to="/">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default SingleMovie;
