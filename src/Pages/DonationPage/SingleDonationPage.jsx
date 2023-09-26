/* eslint-disable react/prop-types */

const SingleDonationPage = ({ data }) => {
    const { picture, category, title, bg_color, text_color, btn_bg_color, price } = data || {}

    const cardBg = {
        backgroundColor: bg_color
    }
    const textColor = {
        color: text_color
    }

    const btnBgColor = {
        backgroundColor: btn_bg_color
    }

    const viewBtnBg = {
        backgroundColor: text_color
    }

    return (
        <div>
            <div className="card bg-base-100 border rounded flex flex-row">
                <img className="w-2/5" src={picture} />
                <div style={cardBg} className="card-body flex-1 p-2">
                    <div>
                        <div style={textColor}>
                            <button style={btnBgColor} className="p-2 mb-2 border font-medium rounded">
                                {category}
                            </button>
                        </div>
                        <h2 className="font-semibold text-xl mb-2">{title}</h2>
                        <p style={textColor}>{price}</p>
                    </div>
                    <button style={viewBtnBg} className="text-xl p-3 rounded-md mt-4 font-bold text-white">View Details</button>
                </div>
            </div>
        </div >
    );
};

export default SingleDonationPage;