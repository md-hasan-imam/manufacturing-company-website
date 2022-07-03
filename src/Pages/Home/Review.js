import React, { useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './review.css'

import { useQuery } from 'react-query';
import Loading from '../Loading';

const Review = () => {

    const {data:reviews, isLoading } =useQuery('reviews',()=>fetch('https://rocky-reef-55202.herokuapp.com/reviews')
            .then(res => res.json())
             )
             if(isLoading){
                 <Loading></Loading>
             }
    
    return (
        <div className='mt-10 bg-secondary py-20 pb-24'>
            <div className='mb-20'>
                <h2 className='text-4xl my-3 font-bold text-white'>CUSTOMER <span className='text-primary'>REVIEWS</span> </h2>
            </div>
            <div className='mx-5'>
                <Swiper
                    // install Swiper modules
                    Autoplay={{
                        autoplay:true,
                        delay: 1000,
                        disableOnInteraction: false,
                        loop:true
                    }}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
                >
                    {
                        reviews?.map((review, index) =>
                            <div key={index} >
                                <SwiperSlide>
                                    <div className='stack'>
                                        <div className='h-56 card bg-white text-primary-content py-3'>
                                            <div className='card-body '>
                                                <h3 ><span className='text-2xl text-primary font-bold '>{review.name}</span> </h3>
                                                <p className='text-sm my-1 text-secondary font-bold'>{review.description}</p>
                                                <p className='text-secondary'>Ratings: <span className='text-lg font-bold text-primary'>{review.ratings}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>)
                    }
                </Swiper>
            </div >
        </div >
    );
};

export default Review;