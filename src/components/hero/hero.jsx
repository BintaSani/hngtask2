import React from "react";
import Poster from '../../assets/Poster.jpg';
import Imdb from '../../assets/imdb.png';
import {ReactComponent as Tomato} from '../../assets/tomato.svg';
import {ReactComponent as Watch} from '../../assets/play.svg';
import './hero.scss'

const Hero = () => {
    return(
        <div className="hero" style={{
            backgroundImage: `url(${Poster})`
        }}>
            <div className='details'>
                <h1 className='title'>John Wick 3 : Parabellum</h1>
                <div className='ratings'>
                    <div className='imdb'>
                        <img src={Imdb} alt='imdb' className='imdb-logo'/> <p className='popularity'>86.0 / 100</p>
                    </div>
                    <div className='tomato'>
                        <Tomato/><p className='votes'>97%</p>
                    </div>
                </div>
                <p className='overview'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <div className='watch-now'><Watch/><p>WATCH TRAILER</p></div>
            </div>


        </div>
    )
}

export default Hero;