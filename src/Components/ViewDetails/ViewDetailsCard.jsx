import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetailsCard = () => {

    const [donationCard, setDonationCard] = useState({})

    const { id } = useParams()
    // console.log(id)
    const allDonationData = useLoaderData()
    // console.log(allDonationData)

    useEffect(() => {
        const card = allDonationData.find(donationData => donationData.id == id)
        setDonationCard(card)

    }, [id, allDonationData])

    console.log(donationCard)

    const { title, picture, description } = donationCard;

    const HandelDonateBtn = () => {
        alert("Good job!", "You clicked the button!", "success");
    }



    return (
        <div className="flex container mx-auto justify-center mt-10">
            <div className="card w-4/5 h-[80vh] ">
                <div className="">
                    <img className="w-full lg:relative bg-opacity-30 h-[70vh]" src={picture} />

                    <div className=" lg:w-[69.5vw] h-24  lg:absolute lg:bg-black lg:bg-opacity-60 -mt-28  ">
                        <div className="flex items-center ml-5 mt-12 md:ml-5 lg:mt-7 lg:ml-12">
                            <button onClick={() => HandelDonateBtn} className="bg-[#FF444A] rounded-md p-2 text-white font-bold text-xl ">Donate $290</button>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <h2 className="card-title mb-3 mt-3 text-2xl font-semibold">
                        {title}

                    </h2>
                    <p className="badge badge-secondary text-sm">{description}</p>
                </div>

            </div>
        </div>

    );
};

export default ViewDetailsCard;