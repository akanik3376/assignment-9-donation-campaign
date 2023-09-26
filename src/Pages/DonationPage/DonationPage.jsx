import { useEffect, useState } from "react";
import SingleDonationPage from "./singleDonationPage";

const DonationPage = () => {

    const [donation, setDonation] = useState([])

    const [noDonation, setNoDonation] = useState(false)

    useEffect(() => {
        const selectedItem = JSON.parse(localStorage.getItem('donation'))

        if (selectedItem) {
            setDonation(selectedItem)
        }
        else {
            setNoDonation('data nai')
        }
    }, [])


    return (
        <div>

            {
                noDonation ? <p>
                    data nai
                </p>

                    :
                    <div className="grid grid-cols-2 gap-4">
                        {
                            donation?.map(donationData => <SingleDonationPage key={donationData.id} data={donationData}></SingleDonationPage>)
                        }
                    </div>
            }

        </div>
    );
};

export default DonationPage;