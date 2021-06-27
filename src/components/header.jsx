import React, { useState } from 'react';

//Import CSS
import '../assets/css/header.css';

//Import NavItems Link
import NavItem from './navItems';

//Import Logo
import WiketLogo from '../assets/svg/wiket-logo.svg';

const Header = () => {
    const [openNavBar, setOpenNavBar] = useState(false);
    const handClick = () => setOpenNavBar(!openNavBar);
    return (
        <>
            <header className='wiket-main-header'>
                <div className='wrapper'>
                    <nav>
                        <div className='wiket-logo-home'>
                            <img src={WiketLogo} alt='wiket-logo-home' />
                        </div>

                        <ul
                            className={
                                openNavBar
                                    ? 'wiket-main-nav active'
                                    : 'wiket-main-nav'
                            }
                            onClick={handClick}
                        >
                            <NavItem />
                        </ul>

                        <button
                            type='submit'
                            className='btn get-started desktop'
                        >
                            Get started
                        </button>

                        <div className='mobile-nav'>
                            <button
                                type='submit'
                                className='btn get-started mobile'
                            >
                                Get started
                            </button>
                            <div
                                className={
                                    openNavBar
                                        ? 'hamburger active'
                                        : 'hamburger'
                                }
                                onClick={handClick}
                            >
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
