import React from 'react';

import { ReactComponent as Facebook} from '../../assets/facebook.svg';
import { ReactComponent as Instagram} from '../../assets/instagram.svg';
import { ReactComponent as Twitter} from '../../assets/twitter.svg';
import { ReactComponent as Youtube} from '../../assets/youtube.svg';

import './footer.scss';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='socials'>
                <div className='div'><Facebook/></div>
                <div className='div'><Instagram/></div>
                <div className='div'><Twitter/></div>
                <div className='div'><Youtube/></div> 
            </div>
            <div className='policy'>
                <h2>Conditions of Use</h2>
                <h2>Privacy & Policy</h2>
                <h2>Press Room</h2>
            </div>
            <div className='copyright'>
                <h2> &copy;  2023 MovieBox by Binta Sani</h2>
            </div>
        </div>
    )
}

export default Footer;