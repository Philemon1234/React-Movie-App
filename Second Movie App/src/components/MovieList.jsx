import React from 'react'

function MovieList(props) {
  return (
   <div className='card'>
     {/* {props.movies.map((movie, index) => <div>
        <img src={movie.Poster} alt="Movie" />
    </div>)} */}
    <div className="image-box">
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png" alt="movie" />
    </div>

    <div className="image-content">
        
    </div>
   </div>
  )
}

export default MovieList