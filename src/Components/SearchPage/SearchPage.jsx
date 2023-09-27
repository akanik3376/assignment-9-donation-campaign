import { useLoaderData, useLocation } from "react-router-dom";
import SarchCard from "../SarchCard/SarchCard";

const SearchPage = () => {

    const location = useLocation()
    const value = location.state.inputValue
    // console.log(value)

    function capitalizeWords(string) {
        return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }
    const capital = capitalizeWords(value)
    console.log(capital)


    const cardData = useLoaderData()
    const filterData = cardData.filter(item => item.category === capital)

    console.log(filterData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
            {
                filterData?.length > 0 ? filterData.map(data => <SarchCard key={data.id} data={data}></SarchCard>) : <h1>no data</h1>
            }
        </div>
    );
};

export default SearchPage;