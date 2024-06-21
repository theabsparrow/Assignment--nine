
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import TheClient from "../components/theClient/TheClient";


const Client = () => {
    const [clientData, setClientData] = useState([])

    useEffect(() => {
        fetch('client.json')
            .then(res => res.json())
            .then(data => setClientData(data))
    }, [])
  

    return (
        <div className="px-1 md:px-[20px] lg:px-[70px] mt-10">
            <Helmet>
                <title>Client | TheAabash </title>
            </Helmet>
            <div>
                {
                    clientData.map(theClientData => <TheClient key={theClientData.id} theClientData={theClientData}></TheClient>)
                }
            </div>
        </div>
    );
};

export default Client;