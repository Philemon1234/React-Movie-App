import React from 'react'

function MovieListHeading(props) {
  return (
    <div>
        <h1 className='text-3xl text-white'>{props.heading}</h1>
    </div>
  )
}

export default MovieListHeading