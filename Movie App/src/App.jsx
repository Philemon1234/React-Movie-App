import React, { useEffect, useState } from "react";
import "./App.css"
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=f6f2be46`;

    const response = await fetch(url)
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(()=> {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div>
      <div className="row flex justify-between pt-10 pl-40 pr-40">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row flex gap-6 p-10 pl-36 flex-wrap">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
