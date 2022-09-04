import React from 'react';
import step1 from '../../images/how we works step 1 purchase image.svg'
import step2 from '../../images/how we works step 2.svg'
import step3 from '../../images/how we works step 3.svg'

const HowWeWorks = () => {
    return (
        <section id='howweworks' className='bg-base-100 my-24'>
            <h2 className='pt-10 text-4xl font-bold'>How we<span className='text-primary'> works</span>?</h2>
            <div className="container px-3 md:px-5 lg:px-5 mx-auto">
                <ul class="steps lg:w-4/5 steps-vertical lg:steps-horizontal pt-16 pb-16 ">
                    <li class="step step-primary font-semibold">Receive Order</li>
                    <li class="step step-primary  font-semibold">Manufacture Parts</li>
                    <li class="step font-semibold">Ship Parts</li>
                </ul>
                <div className='grid lg:grid-cols-3 gap-10'>
                    <div className='max-w-md lg:w-full mx-auto shadow-xl rounded p-5'>
                        <img src={step1} alt="" className='w-4/5 mx-auto'/>
                        <h3 className='text-lg my-4 font-semibold'>Order your desire parts</h3>
                        <h5 className='mb-1'>First Signup and choose your desire product.Then finish payment process.</h5>
                    </div>
                    <div className='max-w-md lg:w-full mx-auto  shadow-xl rounded p-5'>
                        <img src={step2} alt="" className='w-4/5 mx-auto'/>
                        <h3 className='text-lg my-4 font-semibold'>Manufacture your parts</h3>
                        <h5 className='mb-1'>The best manufacturer is our quality verified network will start producting them righ way.</h5>
                    </div>
                    <div className='max-w-md lg:w-full mx-auto  shadow-xl rounded p-5'>
                        <img src={step3} alt="" className='w-4/5 mx-auto'/>
                        <h3 className='text-lg my-4 font-semibold'>ship your parts</h3>
                        <h5 className='mb-1'>We handle all order logistics and communication, make sure your parts arrive on time.</h5>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default HowWeWorks;