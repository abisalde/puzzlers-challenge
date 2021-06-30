import React from 'react';

// Import all Small Components
import HeroTextDesc from '../components/heroTextDesc';
import HeroImageOverlay from '../components/heroImageOverlay';
import LocationRoute from '../components/locationRoute';
import WiketServices from '../components/wiketServices';

const Hero = ({ tref, motion, animation }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <section className='wiket-hero' ref={tref}>
                    <motion.div
                        className='wrapper'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='wiket-hero-content'>
                            <HeroTextDesc motion={motion} />
                            <figure className='wiket-hero-image' tref={tref}>
                                <HeroImageOverlay
                                    motion={motion}
                                    animation={animation}
                                />
                                <div className='cards-content'>
                                    <WiketServices
                                        tref={tref}
                                        animation={animation}
                                        motion={motion}
                                    />
                                </div>
                                <figcaption>
                                    <h3>Hanging Garden</h3>
                                    <small>Florist in Bangkok</small>
                                </figcaption>
                            </figure>
                            <LocationRoute />
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </>
    );
};

export default Hero;
