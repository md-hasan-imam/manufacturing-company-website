import React from 'react';
import summary1 from '../../images/business summary/review (1).svg'
import summary2 from '../../images/business summary/review (2).svg'
import summary3 from '../../images/business summary/review (3).svg'

const BusinessSummary = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow w-4/5 my-20">
            <div class="stat ">
                <div class="w-24 mx-auto my-3">
                    <img src={summary3} alt="" className=''/>
                </div>
                <div class="stat-value text-5xl  my-4">3000+</div>
                <div class="stat-title mt-3 text-xl">Satisfied Customers</div>
            </div>

            <div class="stat">
            <div class="w-24 mx-auto my-3">
                    <img src={summary2} alt="" className=''/>
                </div>
                <div class="stat-value text-5xl  my-4">44000+</div>
                <div class="stat-title mt-3 text-xl">Reviews</div>

            </div>

            <div class="stat ">
            <div class="w-24 mx-auto my-3">
                    <img src={summary1} alt="" className=''/>
                </div>
                <div class="stat-value text-5xl my-1">100+</div>
                <div class="stat-title mt-3 text-xl">Best Quality Parts</div>
            </div>

        </div>
    );
};

export default BusinessSummary;