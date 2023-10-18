import React from 'react';

import Imdb from '../../assets/imdb.png';
import {ReactComponent as Tomato} from '../../assets/tomato.svg';
import {ReactComponent as Favorite} from '../../assets/Favorite.svg';

import './card.scss';
import {  useNavigate } from 'react-router-dom';


// {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   }
const Card = ({movie}) =>{
    
    const {title, id, release_date, vote_average, poster_path, popularity} = movie;
    const popular = popularity / 1.5;
    const imdb = Math.round(popular * 10) / 10;

    const navigate = useNavigate();
    
    

    return(
        <div data-testid='movie-card'>
            
            <div data-testid='movie-poster' style={{
                backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + poster_path})`}}
                onClick={()=> navigate (`/movie/${id}`)}>
                <div className='svg'>
                    <Favorite />
                </div>    
                
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
