import { useEffect, useState } from "react";
import SingleDonationPage from "./singleDonationPage";

const DonationPage = () => {

    const [donation, setDonation] = useState([])

    const [noDonation, setNoDonation] = useState(false)

    const [isShowMore, setShowMore] = useState(false)

    useEffect(() => {
        const selectedItem = JSON.parse(localStorage.getItem('donation'))

        if (selectedItem) {
            setDonation(selectedItem)
        }
        else {
            setNoDonation('No  data available')
        }
    }, [])


    return (
        <div>

            {
                noDonation ? <div>
                    <div className="flex justify-center mt-10">
                        <img className="w-1/3" src="https://i.ibb.co/gdjfXdJ/323667.png" alt="" />
                    </div>
                </div>

                    :
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            isShowMore ? donation?.map(donationData => <SingleDonationPage key={donationData.id} data={donationData}></SingleDonationPage>)

                                : donation?.slice(0, 4).map(donationData => <SingleDonationPage key={donationData.id} data={donationData}></SingleDonationPage>)
                        }
                    </div>
            }


            <div className="mt-10 flex justify-center">
                {
                    donation.length > 4 && <button onClick={() => setShowMore(!isShowMore)} className="text-xl rounded-md  bg-[#009444] text-white font-bold py-2 px-5"> {isShowMore ? 'See Less' : "See All"}</button>
                }
            </div>
        </div>
    );
};

export default DonationPage;