import React, {useState, useEffect} from 'react';
import { options } from '../utils/utils';
import Card from '../card/card';
import './preview.scss';

const Preview = () =>{ 
    const [topRated, setTopRated] = useState([]);
    try{
        useEffect(() => {
            const fetchTopRated = async () => {
                const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
                const movies = await data.json();
                
                setTopRated(movies.results);
            };
            fetchTopRated();
        }, []);

        
    } catch (error){
        console.log(error);
        alert(`${error.message}`)
    }
    return(
    <div className='preview'>
        {
            topRated.filter((movie,idx) => idx < 10)
            .map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))
        }
    </div>

    );
}
export default Preview;
