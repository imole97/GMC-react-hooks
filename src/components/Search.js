import React from 'react'

function Search({handleInput, search}) {
    return (
        <section className='searchbox-wrap'>
            <input 
             type='text' 
             className='searchbox'
             placeholder='Time to search for a movie!'
             onChange={handleInput}
             onKeyPress={search}
             />
        </section>
    )
}

export default Search
