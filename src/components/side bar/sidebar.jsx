import React from "react";

import {ReactComponent as Logo} from '../../assets/tv.svg';
import Home from '../../assets/home.png';
import Movie from '../../assets/Movie Projector.png';
import Series from '../../assets/TV Show.png';
import UpComing from '../../assets/Calendar.png';
import Exit from '../../assets/Logout.png';


import './sidebar.scss';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    return(
        <div className="sidebar">
            <div className="icons logo">
                <Logo onClick={()=> navigate (`/`)}/>
                <h2>MovieBox</h2>
            </div>
            <div className="icons two " onClick={()=> navigate (`/`)}>
                <img src={Home} alt="home"/>
                <h2 className="text">Home</h2>
            </div>
            <div className="icons two one">
                <img src={Movie} alt="home"/>
                <h2 className="text m">Movie</h2>
            </div>
            <div className="icons two ">
                <img src={Series} alt="home"/>
                <h2 className="text">Tv series</h2>
            </div>
            <div className="icons two ">
                <img src={UpComing} alt="home"/>
                <h2 className="text">Upcoming</h2>
            </div>
            <div className="cont ">
                <div className="play">
                    <p>Play movie quizes and earn free tickets</p>
                </div>
                <div className="people">
                    <p>50k people are playing now</p>
                </div>
                <button>Start playing</button>
            </div>
            <div className="icons two ">
                <img src={Exit} alt="home"/>
                <h2 className="text" >Log out</h2>
            </div>
        </div>
    )

}

export default SideBar;