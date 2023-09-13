import React from 'react';
// import { useParams } from 'react-router-dom';
// import MovieContext from '../../components/context/movie-context';
import SideBar from '../../components/side bar/sidebar';
import Details from '../../components/details/details';
import './detailspage.scss'

const DetailsPage = () => {
    // const {id} = useParams();
    // const Movies = useContext(MovieContext);
    // const Movie = Movies[id];
    // const {title,backdrop_path,original_title,release_date,overview} = Movie;
    return(
        <div className='details-page'>
            <SideBar/>
            <Details/>
        </div>
    )
}

export default DetailsPage;