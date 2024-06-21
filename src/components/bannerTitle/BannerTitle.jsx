import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Scrolling from "../scrolling/Scrolling";
import { useContext } from "react";
import { GlobalContext } from "../authProvider/AuthProvider";

const BannerTitle = () => {
    const { visitor } = useContext(GlobalContext);
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 data-aos="fade-up" data-aos-duration="2200" className="text-2xl md:text-6xl lg:text-[45px] text-[#006aff] drop-shadow-md font-bold font-Poppins text-center lg:leading-10 w-[80vw] lg:w-[60vw] mb-4 md:mb-8 lg:mb-8">Discover a place you will love to buy or rent for your living</h1>
                <p data-aos="fade-down" data-aos-duration="2400" className="text-center md:text-lg md:font-semibold lg:text-lg lg:font-semibold bg-[#f5f6f7CC] px-2 py-1 rounded-lg text-[#3b4144] lg:leading-8 font-Poppins w-80vw lg:w-[60vw] mb-4 md:mb-8 lg:mb-8">The Aabash gives you the opportunity to find your suitable place where you can spend your quality time. here are some example for you . check all of them if you can find your best one</p>
            </div>
            <div className="flex justify-center gap-4 mb-4 md:mb-8 lg:mb-8">
                {
                    visitor ? <>
                        <Link className="text-black rounded-xl text-lg lg:leading-[21px] px-2 py-1 md:px-3 md:py-3 lg:px-3 lg:py-3 bg-transparent border-[1px] border-[#006aff] font-semibold hover:bg-[#006aff] hover:text-white" to='/buy'>Buy</Link>
                        <Link className="text-black rounded-xl text-lg lg:leading-[21px] px-2 py-1 md:px-3 md:py-3 lg:px-3 lg:py-3 bg-transparent border-[1px] border-[#006aff] font-semibold hover:bg-[#006aff] hover:text-white" to='/rent'>Rent</Link>
                    </> : <Link className="text-black rounded-xl text-lg lg:leading-[21px] px-2 py-1 md:px-3 md:py-3 lg:px-3 lg:py-3 bg-[#006affCC] border-[1px] border-[#006aff] font-semibold hover:text-white" to='/login'>Login</Link>
                }

            </div>
            <div className="flex justify-center">
                <input className="md:px-8 md:py-4 py-3 px-4 outline-none rounded-l-xl" type="text" placeholder="search for city,neighborhood zip" />
                <button className="rounded-r-xl bg-[#006aff] px-5 text-[28px] text-white hover:bg-black"> <IoMdSearch></IoMdSearch></button>
            </div>
            <div className="mt-4 md:mt-7 lg:mt-7">
                <Scrolling></Scrolling>
            </div>
        </div>
    );
};

export default BannerTitle;