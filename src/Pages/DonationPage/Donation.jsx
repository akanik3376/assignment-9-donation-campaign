/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [getDonation, setDonation] = useState([])

    const [noDonation, setNoDonation] = useState("")

    useEffect(() => {
        const GetDonation = JSON.parse(localStorage.getItem('Donation'))

        if (getDonation) {
            setDonation(GetDonation)
        }
        else {
            setNoDonation('You have not made a donation')
        }

    }, [getDonation])


    return (
        <div className="mt-10">
            {
                noDonation ? <p className="flex justify-center items-center font-bold text-5xl h-[60vh]">{noDonation}</p>
                    : <div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {
                                getDonation.map(donationCard => <DonationCard key={donationCard.id} card={donationCard}></DonationCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;