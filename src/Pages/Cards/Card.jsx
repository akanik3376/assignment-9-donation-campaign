/* eslint-disable react/prop-types */


const Card = ({ card }) => {


    const { id, picture, category, title, bg_color, text_color, btn_bg_color } = card || {}

    // const [donation, setDonation] = useState()

    const cardBg = {
        backgroundColor: bg_color
    }

    const textColor = {
        color: text_color
    }

    const btnBgColor = {
        backgroundColor: btn_bg_color
    }

    const HandelAddToDonation = () => {

        const AddedDonationArray = [];

        const GetDonation = JSON.parse(localStorage.getItem('Donation'))

        if (!GetDonation) {
            AddedDonationArray.push(card)
            localStorage.setItem('Donation', JSON.stringify(AddedDonationArray))

            alert('add to donation')


        }
        else {

            const isExist = GetDonation.find(donation => donation.id == id)

            if (isExist) {
                alert('all ready donated')
            }
            else {
                AddedDonationArray.push(...GetDonation, card)
                localStorage.setItem('Donation', JSON.stringify(AddedDonationArray))
            }


        }

    }





    return (
        <div>
            <div onClick={HandelAddToDonation} className="card bg-base-100 border rounded flex flex-col">
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

export default Card;