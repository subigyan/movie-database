import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, name, info, image, vote }) => {
    return (
        <div className="movie">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="movie-footer">
                <h3>{name}</h3>
                <h4>Rating: {vote === 0 ? "Unavailable" : vote}</h4>
                <p>{info}</p>
            </div>
            <Link to={`movies/${id}`} className="btn btn-primary btn-details">
                Details
            </Link>
        </div>
    );
};

export default Movie;
