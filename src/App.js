import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//73cde7a2

const API_URL = "http://www.omdbapi.com?apikey=73cde7a2";

// Objecto extraido de la API
// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
// };

const App = () => {
   
   //Practicar 
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

  //Función asíncrona que me permite mapiar la data de la API  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  //Valor de búsqueda inicial
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }
        />

        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)} />
       
      </div>

      {movies?.length > 0 ? 
      (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            </div>
        ) : (
            <div className="empty">
            <h2>No movies found</h2>
            </div>
        )}
        
          
    </div>
  );
};

export default App;
