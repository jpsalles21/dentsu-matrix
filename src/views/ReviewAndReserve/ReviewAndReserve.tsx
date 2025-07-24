'use client'
import { Button, Input } from "@/components";
import { useBookingContext } from "@/context/BookingContext";
import { User, Vehicle } from "@/types";
import { useEffect, useState } from "react";
import styles from './ReviewAndReserve.module.css'
import { formatDateAndTime } from "@/utils/formatDateTime";
import { extras } from '@/endpoints/services/extras';
import { commitReservation } from "@/endpoints/services/commit";

interface ReviewAndReserveProps {
    vehicle: Vehicle;
}

const ReviewAndReserve = ({ vehicle }: ReviewAndReserveProps) => {
    const { location, pickupInfo, returnInfo, setVehicle, totalPrice, setTotalPrice } = useBookingContext();
    const [loadingPrice, setLoadingPrice] = useState(true);

    useEffect(() => {
        setVehicle(vehicle);

        const fetchExtras = async () => {
            setLoadingPrice(true);
            try {
                const extrasResponse = await extras();
                const newTotalPrice = extrasResponse[0]?.reservation?.totalPrice;
                if (newTotalPrice !== undefined) {
                    setTotalPrice(newTotalPrice);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingPrice(false);
            }
        };

        fetchExtras();
    }, [vehicle, setVehicle, setTotalPrice]);

    const handleCommit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const user: User = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
        };

        try {
            const response = await commitReservation(user);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.left_cards}>
                <div className={styles.card_details}>
                    <div className={styles.info_title}>
                        <h3>Rental Details</h3>
                    </div>
                    <div className={styles.info_details}>
                        <h4 className={styles.info_subtitle}>Dates & Times</h4>
                        <p>{formatDateAndTime(pickupInfo.date, pickupInfo.time)}</p>
                        <p>{formatDateAndTime(returnInfo.date, returnInfo.time)}</p>
                    </div>
                    <div className={styles.info_details}>
                        <h4 className={styles.info_subtitle}>Pick-up & Return Location</h4>
                        <p>{location?.name}</p>
                        <p>{location?.address}</p>
                    </div>
                </div>
                <div className={styles.card_details}>
                    <div className={styles.info_title}>
                        <h3>Vehicles Details</h3>
                    </div>
                    <div className="info_details">
                        <h4 className={styles.info_subtitle}>Full size</h4>
                        <p>{vehicle.model}</p>
                    </div>
                    <div className={styles.info_details}>
                        <h4 className={styles.info_subtitle}>Pick-up & Return Location</h4>
                        <p>{location?.name}</p>
                        <p>{location?.address}</p>
                    </div>
                    <div className={styles.info_content}>
                        <h4 className={styles.info_subtitle}>Estimated total</h4>
                        <span className={styles.vehicle_price}>
                            {loadingPrice ? "Calculating..." : `$${totalPrice?.toFixed(2)}*`}
                        </span>
                    </div>
                    <p className={styles.warn_message}>*Rates, taxes and fees do not reflect rates, taxes and fees applicable to non-included optional coverages or extras added later. Pay Later charges will be in your destination's local currency.</p>
                </div>
            </div>
            <div className={styles.right_cards}>
                <div className={styles.form}>
                    <div className={styles.form_header}>
                        <h3 className={styles.info_title}>Contact Details</h3>
                    </div>
                    <form id="reservationForm" onSubmit={handleCommit} method="post">
                        <div className={styles.form_names}>
                            <Input labelColor="black" label="First Name" type="text" id="firstName" name="firstName" required />
                            <Input labelColor="black" label="Last Name" type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className={styles.form_infos}>
                            <Input labelColor="black" label="Phone Number" type="tel" id="phone" name="phone" required />
                            <Input labelColor="black" label="Email Address" type="email" id="email" name="email" required />
                        </div>
                    </form>
                </div>
                <div className={styles.reserve}>
                    <div className={styles.booking_card}>
                        <div className={styles.info_title}>
                            <h3>Complete Your Booking</h3>
                        </div>
                        <div className={styles.info_content}>
                            <p className={styles.warn_message}>You will be charged when you pick up the rental.</p>
                            <span className={styles.vehicle_price}>
                                {loadingPrice ? "Calculating..." : `$${totalPrice?.toFixed(2)}*`}
                            </span>
                        </div>
                    </div>
                    <div className={styles.reserve_button}>
                        <Button form="reservationForm" variant="black" type="submit">Reserve Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewAndReserve;
