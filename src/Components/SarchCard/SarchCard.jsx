/* eslint-disable react/prop-types */

const SarchCard = ({ data }) => {

    const { picture, category, title, bg_color, text_color, btn_bg_color } = data || {}

    const cardBg = {
        backgroundColor: bg_color
    }
    const textColor = {
        color: text_color
    }
    const btnBgColor = {
        backgroundColor: btn_bg_color
    }



    return (
        <div>
            <div className="card bg-base-100 border rounded flex flex-col">
                <figure><img className="w-full" src={picture} /></figure>
                <div style={cardBg} className="card-body  p-2">
                    <div style={textColor}>
                        <button style={btnBgColor} className="p-2 mb-2 border font-medium rounded">
                            {category}
                        </button>
                        <h2 style={textColor} className="font-semibold">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SarchCard;