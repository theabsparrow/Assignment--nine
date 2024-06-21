import { useContext } from "react";
import { GlobalContext } from "../authProvider/AuthProvider";
import EstateCard from "../estateCard/EstateCard";


const EstateCards = () => {
    const estateHouseCards = useContext(GlobalContext)
    const cardHouses = estateHouseCards.estateCard;
    return (
        <div className="px-1 md:px-[20px] lg:px-[70px] mb-10">
            <div className="text-center">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-[45px] font-bold font-Poppins text-[#3b4144]">Find homes on <span className="text-[#006aff]">TheAAbash</span> </h1>
                <p data-aos="fade-down" data-aos-duration="1000" className="text-[#3b4144] font-Poppins font medium text-lg mt-4 w-[90vw] lg:w-[70vw] mx-auto">Take a deep breath and make yourself ready to fix your living component. Here theAabash is always stand aside you to make this on behalf of you. so be ready to browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cardHouses.map((cardHouse) => <EstateCard key={cardHouse.id} cardHouse={cardHouse}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default EstateCards;