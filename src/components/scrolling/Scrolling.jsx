
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { GlobalContext } from "../authProvider/AuthProvider";

const Scrolling = () => {
const scrollingCards = useContext(GlobalContext);
const scrollingAreas = scrollingCards.estateCard;
 

    return (
        <div className="flex items-center">
            <button className="btn border-[1px] border-[#006aff] bg-transparent text-white text-xl font-semibold leading-5 hover:bg-[#006aff] hover:border-none">
                <span>Location</span>
                <CiLocationOn className="text-2xl "></CiLocationOn>
            </button>    
            <Marquee speed={100} pauseOnHover={true}>
                {
                    scrollingAreas.map((scrollArea) => <Link className="text-white md:text-xl md:mr-3 mr-5" key={scrollArea.id}>{scrollArea.location}</Link>)
                }
            </Marquee>
        </div>
    );
};

Scrolling.propTypes = {
    locationCard: PropTypes.array
}
export default Scrolling;