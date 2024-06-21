import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const EstateCard = ({ cardHouse }) => {
    return (
        <div className='relative overflow-hidden'>
            <div data-aos="zoom-in" data-aos-duration="1000" style={{ backgroundImage: `url(${cardHouse.image})` }} className="bg-no-repeat bg-center py-5 rounded-xl transition-transform duration-300 transform hover:scale-110">
                {/* <img className='rounded-lg' src={cardHouse.image} alt="" /> */}
                <h1 className='text-3xl text-white font-bold font-Poppins text-center'>{cardHouse.segment_name}</h1>
                <div className='px-5 mt-10'>
                    <h1 className='flex gap-2 items-center bg-[#f5f6f7CC] px-2 py-1 rounded-lg text-[#3b4144] text-lg font-semibold font-Poppins'><CiLocationOn></CiLocationOn> <span>{cardHouse.location}</span></h1>
                    <h1 className=' mt-2 text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg text-[#3b4144] font-semibold font-Poppins'> Segment Status: <span>{cardHouse.status}</span></h1>
                </div>
                <div className='mt-[150px] ml-6 mb-5'>
                    <Link to={`/cardHouse/${cardHouse.id}`} className='text-white py-3 px-3 rounded-lg text-lg font-Poppins font-medium bg-[#006aff] hover:bg-transparent hover:border-[2px] border-[#006aff]'>View Property</Link>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    cardHouse: PropTypes.object
}
export default EstateCard;