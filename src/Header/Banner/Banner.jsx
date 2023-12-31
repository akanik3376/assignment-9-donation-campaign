/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useNavigate } from "react-router-dom";



const Banner = ({ inputValue, handleInputChange }) => {

    const navigate = useNavigate()


    const handleSubmit = () => {

        navigate("/SearchPage", {
            state: { inputValue }
        })
        console.log('Input value:', inputValue);
    };



    return (


        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/J3Gj0py/Rectangle-4281.png) ' }}>
            <div className="hero-overlay bg-opacity-95"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold text-[#0B0B0B]">
                        I Grow By Helping People In Need
                    </h1>
                    <div className="flex mt-5 md:ml-10 lg:ml-10">

                        <input type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs px-5 text-black   rounded-l" />

                        <button onClick={handleSubmit}
                            className="px-4 py-2 text-white rounded-md font-bold bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;