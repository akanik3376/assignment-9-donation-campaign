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
        // <div style={{ backgroundImage: 'url(https://i.ibb.co/J3Gj0py/Rectangle-4281.png) ' }}
        //     className="border h-[70vh] ">

        //     <div className="hero-overlay bg-opacity-90"></div>

        //     <div className="mt-10">


        //     </div>


        //     <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        //         <div className="hero-overlay bg-opacity-60"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="max-w-md">
        //                 <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //                 <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="btn btn-primary">Get Started</button>
        //             </div>
        //         </div>
        //     </div>

        //     <h1 className="text-3xl font-bold text-[#0B0B0B]">
        //             I Grow By Helping People In Need
        //         </h1>
        //         <div className="flex mt-5 md:ml-10 lg:ml-10">

        //             <input type="text"
        //                 value={inputValue}
        //                 onChange={handleInputChange}
        //                 placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs px-5  rounded-md" />

        //             <button onClick={handleSubmit}
        //                 className="px-4 py-2 text-white rounded-md font-bold bg-[#FF444A]">Search</button>
        //         </div>


        // // </div>

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