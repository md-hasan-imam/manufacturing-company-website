import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Parts from '../Shared/Parts/Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';

const Home = () => {

    const [parts, setParts] = useParts();
    const homePageParts = parts.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='pt-6 mb-2 text-4xl font-bold'>Our Featured Products</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 my-20'>
                    {
                        homePageParts.map(part => <Parts
                            key={part._id}
                            part={part}
                        ></Parts>)
                    }
                </div>
            </div>
            <BusinessSummary></BusinessSummary>
            <Review></Review>


        </div>
    );
};

export default Home;