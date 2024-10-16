import React from 'react'

function MovieList(props) {
  return (
    <>
        {props.movies.map((movie, index) => 
        <div>
            <img src={movie.Poster} alt='movie' className='h-full'/>
            </div>
        )}
    </>
  )
}

export default MovieList