import React from 'react';

//Import All Images needed
import GreenThumb from '../assets/jpg/header-img-gardener.jpg';
import PotJect from '../assets/jpg/header-img-pottery.jpg';
import GreenCafe from '../assets/jpg/header-img-barista.jpg';

//Import CSS from Wiket
import '../assets/css/wiket-services.css';

const WiketServices = () => {
    const data = [
        { image: PotJect, desc: 'Potject', descSmall: 'Pottery in Bangkok' },
        {
            image: GreenThumb,
            desc: 'GreenThumb',
            descSmall: 'Garderner in CheChe',
        },
        { image: GreenCafe, desc: 'Green Cafe', descSmall: 'Cafe in Bangkok' },
    ];
    return (
        <>
            <div className='wiket-loc-city'>
                {data.map((card, i) => {
                    return (
                        <div className='wiket-card' key={i}>
                            <img
                                className='wiket-card-img'
                                src={card.image}
                                alt='project-location'
                            />
                            <div className='loc-card-text'>
                                <h3>{card.desc}</h3>
                                <small>{card.descSmall}</small>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default WiketServices;
