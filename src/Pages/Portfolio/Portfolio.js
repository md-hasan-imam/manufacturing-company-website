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
        </div>
    );
};

export default Portfolio;