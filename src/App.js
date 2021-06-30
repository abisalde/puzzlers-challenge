import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/header';
import Hero from './pages/hero';

const App = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    //Framer-motion animation
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
        if (!inView) {
            animation.start({
                y: 100,
                opacity: 0,
            });
        }
    }, [inView, animation]);
    return (
        <>
            <Header scroll={scroll} />
            <Hero tref={ref} motion={motion} animation={animation} />
        </>
    );
};

export default App;
