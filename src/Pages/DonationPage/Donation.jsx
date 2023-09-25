/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [getDonation, setDonation] = useState([])

    const [noDonation, setNoDonation] = useState(false)

    const [seeAll, setSeeAll] = useState(false)

    useEffect(() => {
        const GetDonation = JSON.parse(localStorage.getItem('Donation'))

        if (getDonation) {
            setDonation(GetDonation)
        }
        else {
            setNoDonation('You have not made a donation')
        }

    }, [])


    console.log(seeAll)
    return (
        <div className="mt-10">
            {
                noDonation ? <p className="flex justify-center items-center font-bold text-5xl h-[60vh]">Donation naw</p>
                    : <div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {
                                seeAll ? getDonation.map(donationCard => <DonationCard key={donationCard.id} card={donationCard}></DonationCard>)
                                    :
                                    getDonation.slice(0, 4).map(donationCard => <DonationCard key={donationCard.id} card={donationCard}></DonationCard>)
                            }
                        </div>
                    </div>
            }


            {
                getDonation.length > 4 && <div onClick={() => setSeeAll(!seeAll)} className="flex justify-center">
                    <button className="btn rounded w-28 bg-[#009444] font-semibold text-white p-2 mt-10 ">{seeAll ? "See Less" : "See All"}</button>
                </div>
            }

        </div>
    );
};

export default Donation;