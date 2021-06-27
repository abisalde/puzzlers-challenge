import React from 'react';
import '../assets/css/header.css';
import NavItem from './navItems';
import WiketLogo from '../assets/svg/wiket-logo.svg';

const Header = () => {
    return (
        <>
            <header>
                <div className='wrapper'>
                    <nav>
                        <div className='wiket-logo-home'>
                            <img src={WiketLogo} alt='wiket-logo-home' />
                        </div>

                        <div className='hamburger'>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>

                        <ul>
                            <NavItem />
                        </ul>

                        <button type='submit' className='btn get-started'>
                            Get Started
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
