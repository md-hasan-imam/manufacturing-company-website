import React from 'react';


const Portfolio = () => {
    return (
        <div className='mt-20'>
            <div class="card w-3/6 mx-auto bg-slate-100 text-black">
                <div class="card-body text-left">
                    <h2 class="text-3xl font-bold text-center mb-10 px-10">Welcome to My portfolio</h2>
                    <p className=''><span className='font-bold '>Name:</span> Md. Hasan Imam </p>
                    <p className='my-3'><span className='font-bold '>Email:</span> mohasanimam@gmail.com </p>
                    <p className=''><span className='font-bold '>Education:</span> Graduated(BBA program major in Marketing)</p>

                    <p className='my-2'><span className='font-bold '>Skills:</span></p>
                    <ul className='font-bold list-disc ml-16'>
                        <li>MongoDB atlas for database integration</li>
                        <li>Firebase for authentication</li>
                        <li>React router</li>
                        <li>Tailwind, Bootstrap CSS</li>
                        <li> React firebase Hooks</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <h2 className='text-3xl font-bold my-10'>My Developed Websites</h2>
                <div class="card w-3/5 mx-auto bg-slate-100 text-black my-4">
                    <div class="card-body items-center text-left">
                        <h2 class="text-2xl font-bold">AUTOMA Car Parts Manufacturer Website</h2>
                        <p className='my-3'>Live site link: https://automa-car-parts-manufacturer.web.app/
                        </p>
                    </div>
                </div>
                <div class="card w-3/5 mx-auto bg-slate-100 text-black my-5">
                    <div class="card-body items-center text-left">
                        <h2 class="text-2xl font-bold">StoreCare inventory management Website</h2>
                        <p className='my-3'>Live site link: https://inventory-management-sit-7c7f6.web.app/home
                        </p>
                    </div>
                </div>
                <div class="card w-3/5 mx-auto bg-slate-100 text-black my-4">
                    <div class="card-body items-center text-left">
                        <h2 class="text-2xl font-bold">DentPro Dental service porvider Website</h2>
                        <p className='my-3'>Live site link: https://dentpro-dental-website.web.app/
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;