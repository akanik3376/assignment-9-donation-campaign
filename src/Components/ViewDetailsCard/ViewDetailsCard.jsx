import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const ViewDetailsCard = () => {

    const [cardDetails, setCardDetails] = useState()

    const { id } = useParams()

    const selectedCard = useLoaderData()

    useEffect(() => {
        const findCardDetails = selectedCard?.find(card => card.id == id)
        setCardDetails(findCardDetails)
    }, [id, selectedCard])

    // console.log(cardDetails)


    return (
        <div>
            <DetailsCard cardDetails={cardDetails}></DetailsCard>
        </div>
    );
};

export default ViewDetailsCard;