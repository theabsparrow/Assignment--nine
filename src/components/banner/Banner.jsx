import { useContext } from "react";
import { GlobalContext } from "../authProvider/AuthProvider";
import Slider from "../slider/Slider";
import BannerTitle from "../bannerTitle/BannerTitle";
const Banner = () => {
    const { estateCard } = useContext(GlobalContext);

    const threeCard = estateCard.slice(0, 3)

    return (
        <div className="px-1 md:px-[20px] lg:px-[70px] relative">
            <Slider threeCard={threeCard}></Slider>
            <div className="absolute bottom-[110px] md:top-[50px] lg:bottom-[50px] left-[5%] lg:left-[15%] z-10  w-[90vw] lg:w-[70vw]">
                <BannerTitle></BannerTitle>
            </div>
        </div>
    );
};

export default Banner;