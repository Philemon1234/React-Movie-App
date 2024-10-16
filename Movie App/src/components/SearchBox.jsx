import React from 'react'

function SearchBox(props) {
  return (
    <div>
        <input className='text-gray-300 p-3 border border-gray-600 rounded outline-0'
        type="text"
        value={props.value} 
        onChange={(event)=> props.setSearchValue(event.target.value)}
        placeholder='Search movie...'
        />
    </div>
  )
}

export default SearchBox