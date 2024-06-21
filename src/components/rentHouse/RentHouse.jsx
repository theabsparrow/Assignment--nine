import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const RentHouse = ({singleRentHouse}) => {
    const { area, description, estate_title, facilities, image, location, price, segment_name, } = singleRentHouse
    return (
        <div data-aos="zoom-out" data-aos-duration="1000" className='bg-[#f5f6f7] mt-5 pt-4 rounded-xl'>
            <h1 className="text-4xl font-bold text-center font-Poppins">{estate_title}</h1>
            <div className='flex flex-col lg:flex-row justify-between gap-10 mt-4'>
                <div className='relative'>
                    <img className='rounded-xl' src={image} alt="" />
                    <div className="flex gap-4 absolute top-2 left-2">
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg">Area: {area}</h1>
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg flex items-center gap-2"><CiLocationOn className="text-black"></CiLocationOn> <span>{location}</span></h1>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-2xl font-bold font-Poppins"> {segment_name}</h1>
                        <p className="mt-2 text-lg text-[#3b4144] font-Poppins font-medium">{description}</p>
                    </div>
                    <div className="mt-2 border-b-[2px] border-[#6b7780] border-dashed pb-4">
                        <h1 className="text-xl font-bold font-Poppins text-[#3b4144]">The facilities you will be provided:</h1>
                        {
                            facilities.map((facility, i) => <li key={i}>{facility}</li>)
                        }
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <h1 className="bg-white py-2 px-3 rounded-xl text-[#006aff] font-Poppins font-medium text-xl">Price {price}</h1>
                        <Link to='/' className="py-2 px-3 rounded-xl bg-[#006aff] text-white font-Poppins font-medium text-xl">See Location</Link>
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

RentHouse.propTypes = {
    singleRentHouse:PropTypes.object
}
export default RentHouse;