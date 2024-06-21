import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import BuyHouse from "../components/buyHouse/BuyHouse";


const Buy = () => {
    const buyHouseCards = useContext(GlobalContext)
    const buyHouses = buyHouseCards.estateCard;
    const buyHouse = buyHouses.filter(buyHouse => buyHouse.status === "sale");


    return (
        <div className="px-1 md:px-[20px] lg:px-[70px]">
            <Helmet>
                <title>Buy | TheAabash</title>
            </Helmet>

            <div>
                {
                    buyHouse.map(singleBuyHouse => <BuyHouse key={singleBuyHouse.id} singleBuyHouse={singleBuyHouse}></BuyHouse>)
                }
            </div>
            
        </div>
    );
};

export default Buy;