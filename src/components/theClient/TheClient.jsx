import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';

const TheClient = ({ theClientData }) => {
    const { address, age, feedback, image, name, phone_number, statement } = theClientData;


    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='bg-[#f5f6f7] mt-5 rounded-xl'>
            <div className='flex flex-col lg:flex-row gap-10 mt-4 p-5'>
                <div>
                    <img className='rounded-xl' src={image} alt="" />
                </div>
                <div className='bg-white px-10 rounded-xl'>
                    <div className='mt-5'>
                        <h1 className="text-6xl font-bold font-Poppins">{name}</h1>
                        <p className="mt-2 text-lg text-[#3b4144] font-Poppins font-medium">statement: <span className='text-base font-normal'>{statement}</span></p>
                        <p className="mt-2 text-lg text-[#3b4144] font-Poppins font-medium">Feedback: <span className='text-base font-normal'>{feedback}</span></p>
                    </div>
                    <div className='flex items-center gap-5 mt-4'>
                        <span className='text-[#3b4144] font-Poppins font-medium'>rating they gave:</span>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg mt-4">Age: <span>{age}</span> </h1>
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg flex items-center gap-2 mt-4"><CiLocationOn className="text-black"></CiLocationOn> Address: <span>{address}</span></h1>
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg mt-4">Phone Number: <span>{phone_number}</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

TheClient.propTypes = {
    theClientData: PropTypes.object
}
export default TheClient;