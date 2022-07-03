import React from 'react';
import summary1 from '../../images/business summary/review (1).svg'
import summary2 from '../../images/business summary/review (2).svg'
import summary3 from '../../images/business summary/review (3).svg'

const BusinessSummary = () => {
    return (

        <div className='pt-16 pb-5 bg-secondary mb-20'>
            <div className=''>
                <h2 className='text-4xl my-3 font-bold text-white'>Business <span className='text-primary'>Summary</span></h2>
            </div>
            <div class="stats stats-vertical lg:stats-horizontal shadow w-4/5 mt-16 mb-20">
                <div class="stat ">
                    <div class="w-24 mx-auto my-3 border-primary">
                        <img src={summary3} alt="" className='' />
                    </div>
                    <div class="stat-value text-5xl  my-4 text-primary">3000+</div>
                    <div class=" mt-3 text-xl text-secondary">Satisfied Customers</div>
                </div>

                <div class="stat border-primary">
                    <div class="w-24 mx-auto my-3">
                        <img src={summary2} alt="" className='' />
                    </div>
                    <div class="stat-value text-5xl  my-4 text-primary">44000+</div>
                    <div class=" mt-3 text-xl text-secondary">Reviews</div>

                </div>
                <div class="stat border-primary">
                    <div class="w-24 mx-auto my-3">
                        <img src={summary1} alt="" className='' />
                    </div>
                    <div class="stat-value text-5xl my-1 text-primary">100+</div>
                    <div class=" mt-3 text-xl text-secondary">Best Quality Parts</div>
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;