import React from 'react';
import banner1 from '../../images/banner/engine.png'
import banner2 from '../../images/banner/rim.png'
import banner3 from '../../images/banner/gear stick.png'
import banner4 from '../../images/banner/tyre.png'
import './Banner.css'



const Banner = () => {
    return (
        <div className='bg-secondary py-12 my-10' >
            <div className='container mx-auto ' >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className=' text-white text-left banner-text-background  px-14  py-10 rounded flex justify-center items-center' >
                        <div>
                            <h2 className='detail-font text-lg uppercase font-bold '>Get The Best Auto Parts</h2>
                            <h1 className='main-font text-5xl uppercase font-medium my-2'>For Hundreds <br></br> Of <span className='font-bold'>Vehicles</span> </h1>
                            <button className="btn btn-primary my-2 ml-1">Explore Shop</button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col banner-images '>
                                <img src={banner1} alt="" className='w-44 mx-auto pt-3' />
                            </div>
                            <div className='col banner-images'>
                                <img src={banner2} alt="" className='w-40 mx-auto' />
                            </div>
                            <div className='col banner-images '>
                                <img src={banner3} alt="" className='w-44 mx-auto' />
                            </div>
                            <div className='col banner-images '>
                                <img src={banner4} alt="" className='w-64 mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;