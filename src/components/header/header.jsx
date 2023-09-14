import React from 'react';

import { ReactComponent as Tv } from '../../assets/tv.svg';
import { ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as Menu} from '../../assets/Menu.svg';


import './header.scss';

const Header = () => {
   
    return(
        <div className='header'>
            <div className='logo-container'>
                <Tv/>
                <h2>MovieBox</h2>
            </div>
            <div className='search-container' >
                
                <input type="search" 
                     className='search'
                    placeholder="What do you want to watch?"/>
                
                <Search/>
                
            </div>
            <div className='menu-container'>
                <h3>Sign in</h3>
                <Menu/>
            </div>
        </div>
    )
}

export default Header;