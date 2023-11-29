import React, { useState } from 'react';
import MovieCard from './MovieCard';
import data from './data' ;

const App = () => {
    const [movies, setMovies] = useState(data)
    const [showDetail, setShowDetail] = useState(false)

    const handleCardhover = (movie) => {
      console.log(`Hovered over ${movie.name}`);

    };
  
    return (
       < div className="App">
          <div className="MovieCard MovieContainer">
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                onCardHover={handleCardhover}
                setShowDetail={setShowDetail}
                showDetail={showDetail}
                />
            ))}
            </div>
            </div>
          );
       };
        
        export default App;
            