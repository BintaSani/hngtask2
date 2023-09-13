import React from 'react';

import Imdb from '../../assets/imdb.png';
import {ReactComponent as Tomato} from '../../assets/tomato.svg';
import {ReactComponent as Favorite} from '../../assets/Favorite.svg';

import './card.scss';
import {  useNavigate } from 'react-router-dom';



const Card = ({movie}) =>{
    const {title, id, release_date, vote_average, poster_path, popularity} = movie;
    const popular = popularity / 60;
    const imdb = Math.round(popular * 10) / 10;

    const navigate = useNavigate();
    //const {pathname } = useLocation();

    return(
        <div data-testid='movie-card'>
            
            <div data-testid='movie-poster' style={{
                backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + poster_path})`}}
                onClick={()=> navigate (`/movie/${id}`)}>
                {/* <img data-testid='movie-poster' src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={movie.path}/> */}
                <Favorite/>
            </div>
            <div className='details'>
                <p data-testid='movie-release-date'>{release_date}</p>
                <h5 data-testid='movie-title'>{title}</h5>
                <div className='ratings'>
                    <div className='imdb'>
                        <img src={Imdb} alt='imdb' className='imdb-logo'/> <p className='popularity'>{imdb} / 100</p>
                    </div>
                    <div className='tomato'>
                        <Tomato/><p className='votes'>{vote_average * 10}%</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Card;