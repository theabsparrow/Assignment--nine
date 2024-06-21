import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.svg'
import { FiFacebook } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#131313] py-2">
            <footer className="px-1 md:px-[20px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 text-base-content">

                <div className='flex flex-col items-center lg:items-start' data-aos="fade-left" data-aos-duration="1000">
                    <img className='w-[5vw]' src={logo} alt="" />
                    <p className='text-white opacity-80 text-lg text-center lg:text-left font-Poppins font-medium' >TheAabash Real Estate Ltd<br />Providing reliable Real Estate Service since 2024</p>
                </div>

                <div className='grid grid-cols-2'>
                    <div data-aos="zoom-in" data-aos-duration="1200" className='text-white opacity-80 flex flex-col items-center lg:items-start mx-auto'>
                        <h6 className="footer-title font-Poppins font-semibold">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1400" className='text-white opacity-80 flex flex-col items-center lg:items-start mx-auto'>
                        <h6 className="footer-title font-Poppins font-semibold">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1600" className='flex flex-col items-center lg:items-start mx-auto'>
                    <h6 className="footer-title text-white opacity-80 font-Poppins font-semibold">Social</h6>
                    <div className="flex items-center gap-4">
                        <Link><FiFacebook className='text-3xl text-white'></FiFacebook> </Link>
                        <Link><FaYoutube className='text-3xl text-white'></FaYoutube> </Link>
                        <Link><FaGithub className='text-3xl text-white'></FaGithub> </Link>
                    </div>
                    <form>
                        <h6 className="footer-title text-white opacity-80">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white opacity-80">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn bg-[#006aff] border-none join-item text-white">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </footer>

            <aside className='text-center mt-3'>
                <p className='text-white opacity-80 font-Poppins font-semibold'>Copyright © 2024 - All right reserved by <span className='text-[#006aff]'>TheAabash</span> Real Estate Company Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;