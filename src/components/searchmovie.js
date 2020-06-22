import React, { useState } from 'react'

export default function SearchMovie(){

    const [query, setQuery] = useState('')

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting')
        const query = 'Jaws'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=c2b1e253ca03e271ca827d89ccf1b64f&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
        const res =  await fetch(url);
        const data =  await res.json();
        console.log(data);
        }catch(err){console.log(error)}
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