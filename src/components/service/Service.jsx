import { Link } from 'react-router-dom';
import ByeHome from '../../../public/images/ByeHome.png'
import RentHome from '../../../public/images/RentHouse.png'
import Neighbour from '../../../public/images/HouseNeighbour.png'

const Service = () => {
    return (
        <div className="px-4 md:px-[20px] lg:px-[70px]">

            <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
                <h1 className="text-4xl font-semibold font-Poppins text-[#3b4144]">See how We can provide you our service</h1>
                <p className="font-medium font-Poppins text-[#3b4144CC] w-[90vw] lg:w-[60vw] mx-auto mt-4"> TheAabash have various types of services that we can provide our client. you can buy, rent or sell your house here. oue loyal clients are here to get in touch with you always</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-6 ">

                <div data-aos="zoom-in" data-aos-duration="1200" className='flex flex-col items center bg-[#f5f6f7CC] border-[1px] border-[#3b4144CC] rounded-xl p-8'>
                    <div>
                        <img className='rounded-xl' src={ByeHome} alt="" />
                        <div className=' text-center'>
                            <h1 className='text-2xl text-[#3b4144] font-Poppins font-bold'>Buy a house</h1>
                            <p className='text-[#3b4144CC] mt-4 font-Poppins font-medium'>With over about 100k + houses are available right now for selling purpose. TheAabash can help you to match your choice with our collection. so ready for it immediately</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Link to='/buy' className="bg-[#006aff] hover:bg-black text-white px-3 py-2 text-lg font-Poppins font-medium rounded-xl">Bye House</Link>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1400" className='flex flex-col items center bg-[#f5f6f7CC] border-[1px] border-[#3b4144CC] rounded-xl p-8'>
                    <div className='flex-grow flex flex-col'>
                        <div className='flex-grow'>
                            <img className='rounded-xl' src={RentHome} alt="" />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl text-[#3b4144] font-Poppins font-bold'>Rent your favorite house</h1>
                            <p className='text-[#3b4144CC] mt-4 font-Poppins font-medium'>With over about 1000k + houses are available right now for rent. TheAabash can help you to match your choice with our collection. so ready for it immediately</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Link to='/rent' className="bg-[#006aff] hover:bg-black text-white px-3 py-2 text-lg font-Poppins font-medium rounded-xl">Rent House</Link>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1600" className='flex flex-col items center bg-[#f5f6f7CC] border-[1px] border-[#3b4144CC] rounded-xl p-8'>
                    <div>
                        <img className='rounded-xl' src={Neighbour} alt="" />
                        <div className='text-center'>
                            <h1 className='text-2xl text-[#3b4144] font-Poppins font-bold'>See your Neighbourhood</h1>
                            <p className='text-[#3b4144CC] mt-4 font-Poppins font-medium'>With over about 100k + houses are available right now for selling purpose. TheAabash can help you to match your choice with our collection. so ready for it immediately</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Link to='/client' className="bg-[#006aff] hover:bg-black text-white px-3 py-2 text-lg font-Poppins font-medium rounded-xl">Learn more abour Neighbourhood</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;