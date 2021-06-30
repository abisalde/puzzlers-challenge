import React from 'react';
import LocRoute from '../assets/svg/header-line-desktop.svg';
import LocRouteMobile from '../assets/svg/header-line-phone-portrait.svg';

const LocationRoute = () => {
    return (
        <>
            <picture className='loc-route'>
                <source media='(min-width: 990px )' srcSet={LocRoute} />
                <img src={LocRouteMobile} alt='wiket-hero-location' />
            </picture>
        </>
    );
};

export default LocationRoute;
