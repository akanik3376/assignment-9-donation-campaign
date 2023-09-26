import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";

const Cards = () => {


    const cardsData = useLoaderData()
    // console.log(cardsData)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cardsData?.map(cardData => <Card key={cardData.id} card={cardData}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;