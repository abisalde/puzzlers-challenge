import React from 'react';

// Import all Images from Asset
import Florist from '../assets/jpg/header-img-florist.jpg';
import Pin1 from '../assets/svg/pin-01.svg';
import Pin2 from '../assets/svg/pin-02.svg';

const HeroImageOverlay = ({ motion, animation }) => {
    return (
        <>
            <motion.div animate={animation}>
                <div className='hero-img-overlay'>
                    <img src={Florist} alt='wiket-hero-florist' />
                </div>
                <div className='pin-1'>
                    <img src={Pin2} alt='wiket-location-pin' />
                </div>
                <div className='pin-2'>
                    <img src={Pin1} alt='wiket-location-pin' />
                </div>
            </motion.div>
        </>
    );
};

export default HeroImageOverlay;
