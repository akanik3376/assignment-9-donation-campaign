/* eslint-disable react/prop-types */

import { useState } from "react";
import Donation from "../DonationPage/Donation";

const Card = ({ card }) => {


    const { id, picture, category, title, bg_color, text_color, btn_bg_color } = card

    const [donation, setDonation] = useState()

    const cardBg = {
        backgroundColor: bg_color
    }

    const textColor = {
        color: text_color
    }

    const btnBgColor = {
        backgroundColor: btn_bg_color
    }

    const AddToDonation = () => {
        setDonation("click")


    }
    console.log(donation)




    return (
        <div>
            <div onClick={AddToDonation} className="card bg-base-100 border rounded">
                <figure><img className="w-full" src={picture} /></figure>
                <div style={cardBg} className="card-body p-2">
                    <div style={textColor}>
                        <button style={btnBgColor} className="p-2 border font-medium rounded">
                            {category}
                        </button>

                    </div>

                    <h2 style={textColor} className="font-semibold">{title}</h2>
                </div>


            </div>
        </div>
    );
};

export default Card;