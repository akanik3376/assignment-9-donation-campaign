import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {

    const cards = useLoaderData()

    // console.log(cards)

    return (
        <div className="mt-10">
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-10">
                <Cards key={cards.id} cards={cards}></Cards>

            </div>
        </div>
    );
};

export default Home;