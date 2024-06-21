
import { MdOutlineMenu } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import logo from '../../../public/images/logo.svg'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GlobalContext } from "../authProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";

const Navbar = () => {
    const [showing, setShowing] = useState(false);
    const [theme, setTheme] = useState('light');

    const { visitor, logOut } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.setItem('userTheme', theme)
        const siteTheme = localStorage.getItem('userTheme')
        document.querySelector('html').setAttribute('data-theme', siteTheme);
    }, [theme])

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    const functionLogOut = () => {
        logOut()
            .then(() => {
                toast.success("logOut successfully")
            })
            .catch((error) => console.error(error))

    }

    return (
        <div className="shadow-lg px-1 md:px-[20px] lg:px-[70px] sticky z-20">


            <div className="flex justify-between items-center gap-5 lg:gap-0 relative pt-4">

                <div onClick={() => setShowing(!showing)} className="lg:hidden text-3xl absolute left-6 top-7">
                    {
                        showing === true ? <RxCross2 className="text-[#006aff]"></RxCross2> : <MdOutlineMenu className="text-[#006aff]"></MdOutlineMenu>
                    }

                </div>

                <div className="ml-[110px] lg:ml-0">
                    <Link to='/'>
                        <div className="flex">
                            <img data-aos="zoom-in" data-aos-duration="1000" className="w-[5vw] lg:w-[2.5vw]" src={logo} alt="" />
                            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-[#006aff] text-[24px] md:text-[31px] lg:text-[45px] font-Poppins font-bold ">TheAabash</h1>
                        </div>
                    </Link>
                </div>

                <div className={`lg:flex items-center gap-[5px] space-y-4 lg:space-y-0 absolute left-3 lg:left-0 top-[64px] lg:top-0 ${showing ? '' : 'hidden'} lg:relative `}>

                    <div data-aos="zoom-in" data-aos-duration="1200">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}> Home
                        </NavLink>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1400">
                        <NavLink to='/buy' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}> Buy
                        </NavLink>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1600">
                        <NavLink to='/rent' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}> Rent
                        </NavLink>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1800">
                        <NavLink to='/client' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}>
                            Client
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}>
                            Profile
                        </NavLink>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2200">
                        {
                            !visitor && <NavLink to='/signUp' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}>
                                Sign Up
                            </NavLink>
                        }
                    </div>

                    <div className="lg:hidden">
                        {
                            visitor ? <>
                                <div className="flex flex-col items-center gap-6">
                                    <div className="tooltip" data-tip={visitor?.displayName ? visitor.displayName : visitor.email}>
                                        <Link to='/profile'>{visitor?.photoURL ? <img className="rounded-full w-[13vw] lg:w-[3vw]" src={visitor.photoURL} alt="" /> : <CgProfile className="text-7xl lg:text-3xl"></CgProfile>}</Link>
                                    </div>
                                    <Link to="/login" onClick={functionLogOut} className="p-2 text-black rounded-xl text-lg lg:leading-[21px] bg-white font-semibold leading-[21px] border-[2px] border-[#006aff] hover:bg-[#006aff] hover:text-white">
                                        Log out
                                    </Link>
                                </div>
                            </> : <div>
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}>
                                    Login
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>

                <div className="flex flex-row-reverse gap-2">
                    <div data-aos="fade-down" data-aos-duration="1000" className="flex justify-end items-center gap-2 ">
                        <MdLightMode className="text-xl"></MdLightMode>
                        <input
                            onChange={handleTheme}
                            type="checkbox"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 " />
                        <MdDarkMode className="text-xl"></MdDarkMode>
                    </div>

                    <div className="hidden lg:block">
                        {
                            visitor ? <>
                                <div className="flex items-center gap-6">
                                    <div className="tooltip" data-tip={visitor?.displayName ? visitor.displayName : visitor.email}>
                                        <Link to='/profile'>{visitor?.photoURL ? <img className="rounded-full w-[3vw]" src={visitor.photoURL} alt="" /> : <CgProfile className="text-3xl"></CgProfile>}</Link>
                                    </div>
                                    <Link to="/login" onClick={functionLogOut} className="p-2 text-black rounded-xl text-lg lg:leading-[21px] bg-white font-semibold leading-[21px] border-[2px] border-[#006aff] hover:bg-[#006aff] hover:text-white">
                                        Log out
                                    </Link>
                                </div>
                            </> : <div>
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-white rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-[#006aff] font-semibold ' : 'px-2 py-1 lg:px-3 lg:py-3 text-lg leading-[21px] hover:bg-[#006aff] hover:text-white bg-white font-semibold text-black border-[2px] border-[#006aff] rounded-xl'}>
                                    Login
                                </NavLink>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;