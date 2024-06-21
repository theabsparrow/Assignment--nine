import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import RentHouse from "../components/rentHouse/RentHouse";


const Rent = () => {
    const rentHouseCards = useContext(GlobalContext)
    const buyHouses = rentHouseCards.estateCard;
    const rentHouse = buyHouses.filter(buyHouse => buyHouse.status === "rent");

    return (
        <div className="px-1 md:px-[20px] lg:px-[70px]">
            <Helmet> 
                <title>Rent | TheAabash</title>
            </Helmet>
            <div>
                {
                    rentHouse.map(singleRentHouse => <RentHouse key={singleRentHouse.id} singleRentHouse={singleRentHouse}></RentHouse>)
                }
            </div>
        </div>
    );
};

export default Rent;