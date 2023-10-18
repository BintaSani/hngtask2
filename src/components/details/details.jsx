import React, { useState, useEffect } from 'react';
import Group52 from '../../assets/Group 52.jpg';
import Group55 from '../../assets/Group 55.png';
import Group53 from '../../assets/Group 53.png';
import Group54 from '../../assets/Group 54.png';
import {ReactComponent as PlayNow} from '../../assets/play2.svg';
import LoadingSpinner from '../spinner/spinner';

import './details.scss';

import { options } from '../utils/utils';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    
    const [loading, setLoading] = useState(true);
    
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    const [overview, setOverview] = useState([]);
    
    
    try{
        useEffect(() => {
            const fetchDetails = async () => {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}??&append_to_response=credits&language=en-US`, options);
                
                const movies = await data.json();
                console.log(movies);
                setImage(movies.backdrop_path);
                setTitle(movies.title);
                setDate(movies.release_date);
                setTime(movies.runtime);
                setOverview(movies.overview);
                setTimeout(() => setLoading(false), 6000)
            };
            fetchDetails();
        }, [id]);

        
    } catch (error){
        console.log(error);
        alert(`${error.message}`)
    }
    
    
    

    return(
        <div className='detailsx'>
            {loading === false ?   (
            <>  <div className='img'>
                    <img src={"https://image.tmdb.org/t/p/w1280" + image} alt='bg' />
                    <div className='watch'>
                        <div className='logo' >
                            <PlayNow />
                        </div>
                        <h3 className='trailer'>Watch Trailer</h3>
                    </div>
                </div>
                <div className='container'>
                    <div className='now'>
                        <div className='name'>
                            <h2 data-testid="movie-title">{title}</h2>
                            <div className='bullet'><h2 className='h2'>&#8226;</h2><h2 data-testid="movie-release-date">{date}</h2></div>
                            <h2 >&#8226; PG-13</h2>
                            <div className='bullet'><h2 className='h2'>&#8226;</h2><h2 data-testid="movie-runtime">{time}</h2><h2>mins</h2></div>

                            <button>action</button>
                            <button>drama</button>


                        </div>

                        <div className='director'>
                            <p data-testid="movie-overview">{overview}</p>
                            <img src={Group54} alt='new' className='stars' />
                            <img src={Group53} alt='new' className='related' />
                        </div>

                    </div>
                    <div className='imgs'>
                        <img src={Group55} alt='grp' className='show' />
                        <img src={Group52} alt='grp' className='more' />
                    </div>
                </div>
            </>) : (
                        <LoadingSpinner/>
                    )}
        </div>
    )
} 
export default Details;