import React from 'react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-10 bg-secondary text-white">
            <div className='grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='col'>
                    <div className='bg-white rounded w-1/2'>
                        <img src={logo} alt="" className='bg-white rounded' />
                    </div >
                    <div className=" text-white text-left mt-2 ">We are among the leading cart parts manufacturers and suppliers of a rich array of car spare parts, components and accessories.</div>
                </div>
                <div className='col'>
                    <div className='mx-auto w-2/4 text-left'>
                        <h4 className="text-xl font-bold text-primary mb-2">Our Clients</h4>
                        <a className="link link-hover block font-bold">Rubix Auto</a>
                        <a className="link link-hover block  font-bold">Jeneth Car</a>
                        <a className="link link-hover block  font-bold" >Mertin Auto</a>
                        <a className="link link-hover block  font-bold">Car Kits</a>
                    </div>
                </div>
                
                <div className='col'>
                    <div className='mx-auto w-2/4 text-left'>
                        <div className=''>
                            <h4 className="text-xl font-bold text-primary ">Social Links</h4>
                            <br />
                            <a href='#' className="link link-hover"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                            <a className="link link-hover"> <ion-icon name="logo-pinterest" size="large"></ion-icon></a>
                            <br />
                            <a className="link link-hover"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
                            <a className="link link-hover"> <ion-icon name="logo-vimeo" size="large"></ion-icon></a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='mx-auto w-3/4 text-left'>
                        <h4 className="text-xl font-bold text-primary mb-2">Contact Us</h4>
                        <a className="link link-hover block"><span className='font-bold'>Email:</span>  automa@gmail.com </a>
                        <a className="link link-hover block"><span className='font-bold'>Phone:</span> +08801834545</a>
                        <a className="link link-hover block"><span className='font-bold'>Address:</span> 256/1, Shamoli Rd, South Indian Madrasi Colony, Kashmere Gate, India</a>

                    </div>
                </div>
            </div>
            <div className='mt-16 text-center'>
                <p>Copyright © 2022 - All right reserved by <span className='text-primary font-bold' >AUTOMA</span></p>
            </div>
        </footer>
    );
};

export default Footer;