import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20'>
            <div class="card w-3/5 mx-auto bg-slate-100 text-black">
                <div class="card-body items-center text-left">
                    <h2 class="text-xl font-bold">How will you improve the performance of a React Application? </h2>
                    <p className='my-3'><span className='font-bold '>Ans:</span>  I will avoid using props in initial states and inline style attribute in react. I will prefer using CSS animations instead of JS animations. I will avoid Inline Function Definition in the Render Function to improve performance of react application. Also try to utilize dependency optimization and also avoid using Index as Key for map.</p>
                </div>
            </div>
            <div class="card w-3/5 mx-auto bg-slate-100 text-black my-4">
                <div class="card-body items-center text-left">
                    <h2 class="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p className='my-3'><span className='font-bold '>Ans:</span> Mainly there are four type of states in react application those are Local state, Global state, Server state, URL state. I will use useState to manage Local state. Most of the people manage global state using context API but that is not solution. Redux is great to manage global state, but need to make sure that I start using Redux Toolkit. React query is better option for me to manage server state. Finally I will use useParams useLocation to manage URL state.   </p>
                </div>
            </div>
            <div class="card w-3/5 mx-auto bg-slate-100 text-black">
                <div class="card-body items-center text-left">
                    <h2 class="text-xl font-bold">How does prototypical inheritance work?</h2>
                    <p className='my-3'><span className='font-bold '>Ans:</span> Simply, prototypical inheritance refers to the ability to access object properties from another object. It uses a JavaScript prototype to add new properties and methods to an existing object constructor. When we call our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. </p>
                </div>
            </div>
            <div class="card w-3/5 mx-auto bg-slate-100 text-black my-4">
                <div class="card-body items-center text-left">
                    <h2 class="text-xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className='my-3'><span className='font-bold '>Ans:</span> There are different ways to find products by name. it can be filter(), includes(). I will use filter in this case. I will   
Try to use this code on the array of products [ const  newArray = array.filter(searchedText)].
                    </p>
                </div>
            </div>
            <div class="card w-3/5 mx-auto bg-slate-100 text-black">
                <div class="card-body items-center text-left">
                    <h2 class="text-xl font-bold"> What is a unit test? Why should write unit tests?</h2>
                    <p className='my-3'><span className='font-bold '>Ans:</span> Unit testing is a software development process. Where the smallest testable parts of an application which called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;