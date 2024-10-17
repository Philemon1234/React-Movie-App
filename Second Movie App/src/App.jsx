import React from "react";
import { useState } from "react";

function App() {
  // const [movies, setMovies] = useState([
  //   {
  //     Title: "Spider-Man: No Way Home",
  //     Year: "2021",
  //     imdbID: "tt10872600",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Spider-Man",
  //     Year: "2002",
  //     imdbID: "tt0145487",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Spider-Man: Homecoming",
  //     Year: "2017",
  //     imdbID: "tt2250912",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Spider-Man 2",
  //     Year: "2004",
  //     imdbID: "tt0316654",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Amazing Spider-Man",
  //     Year: "2012",
  //     imdbID: "tt0948470",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
  //   },
  // ]);
  return (
    <>
      <div className="card">
        {/* {props.movies.map((movie, index) => <div>
        <img src={movie.Poster} alt="Movie" />
    </div>)} */}
        <div className="image_box">
          <img
            src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png"
            alt="movie"
          />
        </div>

        <div className="image_content">
          <h1 className="movie_title"></h1>
          <p className="movie_year"></p>
        </div>
      </div>
    </>
  );
}

export default App;
