
import React, {useState} from 'react';
import '../src/MovieCard.css';

const MovieCard = ({ movie, onCardHover, setShowDetail, showDetail }) => {
    const [hovered, setHovered] = useState(false);
    const { name, sinopsis, anio, image} = movie;

    const handleMoreClick = () => {
        setShowDetail(!showDetail);
    };
    return (
        <div
        className={`movie-card ${hovered ? 'hovered' : '' }`}
        onMouseEnter={() => {
            setHovered(true);
            onCardHover(movie);
        }}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <button onClick={handleMoreClick}>More...</button>
            {showDetail && movie && (
                <div className="detailed-info">
                    <p>Sinopsis:{sinopsis} </p>
                    <p>Year of release:{anio}</p>
                    </div>
            )}
        </div>
    );
};

export default MovieCard;

