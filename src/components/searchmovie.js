import React from 'react'

export default function SearchMovie(){

    const searchMovies = (e) => {
        e.preventDefault()
        console.log('submitting')

        const url = 'https://api.themoviedb.org/3/movie/550?api_key=c2b1e253ca03e271ca827d89ccf1b64f'
    }

    return(
        <div>
            <form className = 'form' onSubmit = {searchMovies}>
                <label className = 'label' htmlFor = 'query'>Movie Name</label>
                <input className = 'input' type = 'text' name = 'query' placeholder = 'ie jaws'></input>
                <button type = 'submit'>Search</button>
            </form>
        </div>
    )
}