import React from 'react';

import Imdb from '../../assets/imdb.png';
import {ReactComponent as Tomato} from '../../assets/tomato.svg';
import {ReactComponent as Watch} from '../../assets/play.svg';

import './movies.scss';


const Movies = ({movie}) =>{
    const {title, vote_average, backdrop_path, popularity, overview} = movie;
    const popular = popularity / 60;
    const imdb = Math.round(popular * 10) / 10;
    return(
        <div className='backdrop' style={{
            backgroundImage: `url(${"https://image.tmdb.org/t/p/w1280" + backdrop_path})`
        }}>
            
            
            <div className='details'>
                <h1 className='title'>{title}</h1>
                <div className='ratings'>
                    <div className='imdb'>
                        <img src={Imdb} alt='imdb' className='imdb-logo'/> <p className='popularity'>{imdb} / 100</p>
                    </div>
                    <div className='tomato'>
                        <Tomato/><p className='votes'>{vote_average * 10}%</p>
                    </div>
                </div>
                <p className='overview'>{overview}</p>
                <div className='watch-now'><Watch/><p>WATCH TRAILER</p></div>
            </div>
        </div>
    )
};

export default Movies;