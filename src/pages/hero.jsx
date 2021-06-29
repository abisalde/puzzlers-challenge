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
                <div className='wrapper'>
                    <div className='wiket-hero-content'>
                        <HeroTextDesc />
                        <figure className='wiket-hero-image'>
                            <HeroImageOverlay />
                            <div className='cards-content'>
                                <WiketServices />
                            </div>
                            <figcaption>
                                <h3>Hanging Garden</h3>
                                <small>Florist in Bangkok</small>
                            </figcaption>
                        </figure>
                        <LocationRoute />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
