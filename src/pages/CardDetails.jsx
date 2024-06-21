
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cardDetails = useLoaderData()
    const { id } = useParams();

    const cardDetail = cardDetails.find(cardDetail => cardDetail.id == id);
    const { area, description, estate_title, facilities, image, location, price, segment_name, status } = cardDetail


    return (
        <div className="min-h-[calc(100vh-256px)] px-1 md:px-[20px] lg:px-[70px] bg-[#f5f6f7] pt-4">
            <Helmet>
                <title>{segment_name} | TheAabash</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center font-Poppins"> {estate_title}</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-10 items-center mt-4">
                <div className="relative">
                    <img className="rounded-lg" src={image} alt="" />
                    <div className="flex gap-4 absolute top-2 left-2">
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg">Area: {area}</h1>
                        <h1 className="text-[#3b4144] font-medium font-Poppins text-lg bg-[#f5f6f7CC] px-2 py-1 rounded-lg flex items-center gap-2"><CiLocationOn className="text-black"></CiLocationOn> <span>{location}</span></h1>
                    </div>
                    <h1 className="text-[#3b4144] absolute bottom-4 left-[35%] font-bold font-Poppins text-2xl bg-[#f5f6f7CC] px-2 py-1 rounded-lg">Price: <span className="text-[#006aff]">{price}</span></h1>
                </div>
                <div className="bg-white py-3 px-8 rounded-xl">
                    <div className="border-b-[2px] border-[#6b7780] border-dashed pb-4">
                        <h1 className="text-2xl font-bold font-Poppins">{segment_name}</h1>
                        <p className="mt-2 text-lg text-[#3b4144] font-Poppins font-medium">{description}</p>
                    </div>
                    <div className="mt-2 border-b-[2px] border-[#6b7780] border-dashed pb-4">
                        <h1 className="text-xl font-bold font-Poppins text-[#3b4144]">The facilities you will be provided:</h1>
                        {
                            facilities.map((facility, i) => <li key={i}>{facility}</li>)
                        }
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <Link to='/buy' className="bg-[#f5f6f7] py-2 px-3 rounded-xl text-[#006aff] hover:bg-[#006aff] hover:text-white font-Poppins font-medium text-xl">{status}</Link>
                        <Link to='/' className="py-2 px-3 rounded-xl bg-[#006aff] text-white font-Poppins font-medium text-xl">See Location</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;