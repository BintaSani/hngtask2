import React, {useEffect, useState} from 'react';
import Preview from '../components/preview/preview';
import Hero from '../components/hero/hero';

import Footer from '../components/footer/footer';
import { ReactComponent as Tv } from '../assets/tv.svg';
import { ReactComponent as Search} from '../assets/search.svg';
import {ReactComponent as Menu} from '../assets/Menu.svg';

import '../pages/header/header.scss';
import './homepage.scss';
import Card from '../components/card/card';
import { options } from '../components/utils/utils';

const HomePage = () => {
    const [query, setQuery] = useState(''); // returns state, and
                                          //function to change state
  //create state for movies, and update that state appropriately
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(movies);
  }, [movies]);

    return(
        <div className='homepage'>
            <div className='header'>
            <div className='logo-container'>
                <Tv/>
                <h2>MovieBox</h2>
            </div>
            <div className='search-container' >
                
                <input type="search" 
                     className='search'
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                    placeholder="What do you want to watch?"/>
                
                <Search onClick={searchMovies}/>
                
            </div>
            <div className='menu-container'>
                <h3>Sign in</h3>
                <Menu/>
            </div>
            
        </div>
            <Hero/>
            <div className='feature'>
                <h3>Featured movies</h3>
                <p>See more  &#10095;</p>
            </div>
            <>{
                query ? (
                    <div className='search-results'>
            {movies.map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))}
            </div>) : (<Preview/>)
                
            }</>
            
            <Footer/>
        </div>
    )
}

export default HomePage;