import React from 'react';
import Preview from '../components/preview/preview';
import Hero from '../components/hero/hero';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


import './homepage.scss';

const HomePage = () => {
    return(
        <div className='homepage'>
            <Header/>
            <Hero/>
            <div className='feature'>
                <h3>Featured movies</h3>
                <p>See more  &#10095;</p>
            </div>
            <Preview/>
            <Footer/>
        </div>
    )
}

export default HomePage;