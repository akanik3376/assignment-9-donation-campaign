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

    // const backgroundImage = picture

    // const backGround = {
    //     backgroundImage: backgroundImage,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     width: '100%',
    //     height: '400px',
    //     border: '2px solid red'
    // }

    return (
        <div className="flex justify-center mt-10">
            <div className="card w-4/5 h-[60vh] ">
                <img className="w-full h-[60vh]" src={picture} />

                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{description}</div>
                </h2>

            </div>
        </div>

    );
};

export default ViewDetailsCard;