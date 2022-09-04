import React from 'react';
import galler1 from '../../images/gallery img/1.jpg'
import galler2 from '../../images/gallery img/2.jpg'
import galler3 from '../../images/gallery img/3.jpg'
import galler4 from '../../images/gallery img/4.jpg'
import galler5 from '../../images/gallery img/5.jpg'
import galler6 from '../../images/gallery img/6.jpg'
import galler7 from '../../images/gallery img/7.jpg'
import galler8 from '../../images/gallery img/8.jpg'

const Gallery = () => {
    return (
        <div className='mb-24 mx-12'>
            <div className='mb-20'>
                <h2 className='text-4xl my-3 font-bold'>OUR <span className='text-primary'>GALLERY</span></h2>
            </div>
            <div className='grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 mx-auto px-5'>
                <img src={galler1} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler2} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler3} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler4} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler5} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler5} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler6} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler7} alt="gallery img" className='w-4/5 rounded-lg'/>
                <img src={galler8} alt="gallery img" className='w-4/5 rounded-lg'/>
            </div>
        </div>
    );
};

export default Gallery;