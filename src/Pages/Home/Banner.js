import React from 'react';
import galler1 from '../../images/banner/1.jpg'
import galler2 from '../../images/banner/2.jpg'
import galler3 from '../../images/banner/3.jpg'



const Banner = () => {
    return (
        <div class="carousel my-10 max-h-96">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={galler1} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={galler2} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src={galler3} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src={galler1} class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
    );
};

export default Banner;