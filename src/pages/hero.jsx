import React from 'react';

// Import all Small Components
import HeroTextDesc from '../components/heroTextDesc';
import HeroImageOverlay from '../components/heroImageOverlay';
import LocationRoute from '../components/locationRoute';
import WiketServices from '../components/wiketServices';

const Hero = () => {
    return (
        <>
            <section className='wiket-hero'>
                <HeroTextDesc />
                <figure className='wiket-hero-image'>
                    <HeroImageOverlay />
                    <LocationRoute />
                    <WiketServices />
                    <figcaption>
                        <p>Hanging Garden</p>
                        <small>Florist in Bangkok</small>
                    </figcaption>
                </figure>
            </section>
        </>
    );
};

export default Hero;
