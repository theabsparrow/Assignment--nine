import { Helmet } from "react-helmet-async";
import Banner from "../components/banner/Banner";
import EstateCards from "../components/estateCards/EstateCards";
import Service from "../components/service/Service";
import Complain from "../components/Complain";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | TheAabash</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <div className="mt-14">
                    <EstateCards></EstateCards>
                </div>
                <div className="mt-14 mb-10">
                    <Service></Service>
                </div>
                <div className="mt-14 mb-10">
                    <Complain></Complain>
                </div>
            </div>
        </div>
    );
};

export default Home;