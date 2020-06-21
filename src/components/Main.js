import React, {Component} from 'react'
import SearchMovie from './searchmovie'

export default class Main extends Component{
    render(){
        return(
            <div className = 'container'>
                <h1 className = 'title'>React Movie Search</h1>
                <SearchMovie />
            </div>
        )
    }
}