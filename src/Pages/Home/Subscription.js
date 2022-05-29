import React from 'react';

const Subscription = () => {
    return (
        <div className='mx auto mb-20'>
            <div class="hero h-auto bg-base-200 py-16">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center  px-20">
                        <h1 class="text-5xl font-bold">Join our Community</h1>
                        <p class="py-6 font-bold leading-8">Join the palace of AUTOMA and get updated with the recent information about the car world. It will definitely help you to be familiar with the updated parts of your cars.AUTOMA and get updated with the recent information about the car world. It will definitely help you to be familiar with the updated parts of your cars.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;