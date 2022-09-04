import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Loading from '../Loading';
import Parts from '../Shared/Parts/Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Gallery from './Gallery';
import HowWeWorks from './HowWeWorks';
import Review from './Review';
import Subscription from './Subscription';

const Home = () => {

    const [parts, setParts] = useParts();
    const homePageParts = parts.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <div className='mb-28'>
                <h2 className='pt-10 text-4xl font-bold'>Featured <span className='text-primary'>Products</span></h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-y-10 gap-x-5 mt-12'>
                    {
                        homePageParts.map(part => <Parts
                            key={part._id}
                            part={part}
                        ></Parts>)
                    }
                </div>
            </div>
            <HowWeWorks></HowWeWorks>
            <BusinessSummary></BusinessSummary>
            {/* <Gallery></Gallery> */}
            <Review></Review>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;