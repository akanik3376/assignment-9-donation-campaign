/* eslint-disable react/prop-types */

const DetailsCard = ({ cardDetails }) => {
    // console.log(cardDetails)
    const { id, picture, title, description, price } = cardDetails || {}



    const HandelDonateBtn = () => {

        const donationItemArray = [];

        const selectedItem = JSON.parse(localStorage.getItem('donation'))

        if (!selectedItem) {
            donationItemArray.push(cardDetails)
            localStorage.setItem('donation', JSON.stringify(donationItemArray))

            alert('added')
        }
        else {

            const isExist = selectedItem.find(item => item.id == id)
            // console.log(isExist)

            if (!isExist) {
                donationItemArray.push(...selectedItem, cardDetails)
                localStorage.setItem('donation', JSON.stringify(donationItemArray))
                alert('added')
            }
            else {
                alert('already ache')
            }


        }



    }


    return (
        <div className="flex justify-center">
            <div className="w-4/5  card bg-base-100 rounded flex flex-col">
                <div className="">
                    <figure><img className="w-full lg:relative" src={picture} /></figure>
                    <div className="lg:absolute lg:-mt-20 lg:bg-black lg:bg-opacity-60 lg:w-[69.5vw] lg:h-20">

                        <button onClick={HandelDonateBtn} className="text-white lg:ml-20 p-3 w-32 my-4 rounded-md font-semibold text-xl bg-[#FF444A]">{price}</button>

                    </div>
                </div>
                <div className="card-body  p-2">
                    <div >

                        <h2 className="font-bold text-2xl mb-3">{title}</h2>
                        <p className="text-xs">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;