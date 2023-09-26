/* eslint-disable no-undef */

import { useState } from "react";

const Banner = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = () => {

        console.log('Input value:', inputValue);
    };



    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/J3Gj0py/Rectangle-4281.png)' }}
            className="border h-[70vh] flex justify-center items-center">
            <div className="mt-10">
                <h1 className="text-3xl font-bold text-[#0B0B0B]">
                    I Grow By Helping People In Need
                </h1>
                <div className="flex mt-5 md:ml-10 lg:ml-10">

                    <input type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs px-5  rounded-md" />

                    <button onClick={handleSubmit}
                        className="px-4 py-2 text-white rounded-md font-bold bg-[#FF444A]">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;