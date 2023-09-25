import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
    console.log(card)
    const { id, picture, category, title, bg_color, text_color, btn_bg_color, price, } = card || {}

    const cardBg = {
        backgroundColor: bg_color
    }

    const textColor = {
        color: text_color
    }

    const btnBgColor = {
        backgroundColor: btn_bg_color
    }
    const DetailsBtn = {
        backgroundColor: text_color
    }

    return (
        <div>
            <div className="card flex bg-base-100 border rounded">
                <img className="w-2/5" src={picture} />
                <div style={cardBg} className="card-body p-4 flex-1">
                    <div style={textColor}>
                        <button style={btnBgColor} className="p-2 border font-medium rounded">
                            {category}
                        </button>

                    </div>

                    <h2 style={textColor} className="font-semibold text-xl my-2 ">{title}</h2>
                    <p style={textColor} className="mb-4">{price} </p>

                    <Link style={DetailsBtn} className="p-2  rounded text-white font-medium">
                        <button>View Details</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default DonationCard;