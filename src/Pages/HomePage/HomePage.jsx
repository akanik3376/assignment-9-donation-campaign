import { useState } from "react";
import Cards from "../../Components/CardsSection/Cards";
import Banner from "../../Header/Banner/Banner";

const HomePage = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    return (
        <div>

            <div>
                <Banner inputValue={inputValue} handleInputChange={handleInputChange}></Banner>

            </div>

            <div className="mt-10">
                <Cards></Cards>
            </div>
        </div>
    );
};

export default HomePage;