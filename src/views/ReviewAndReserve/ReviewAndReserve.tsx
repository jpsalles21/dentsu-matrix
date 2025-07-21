'use client'
import { Button, Input } from "@/components";
import { useBookingContext } from "@/context/BookingContext";
import { Vehicle } from "@/types";
import { useEffect } from "react";
import styles from './ReviewAndReserve.module.css'
import { formatDateAndTime } from "@/utils/formatDateTime";

interface ReviewAndReserveProps {
    vehicle: Vehicle;
}

const ReviewAndReserve = ({ vehicle }: ReviewAndReserveProps) => {
    const { location, pickupInfo, returnInfo, setVehicle } = useBookingContext();

    useEffect(() => {
        setVehicle(vehicle);
    }, [vehicle]);

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
                        <p>{formatDateAndTime(pickupInfo.date, returnInfo.time)}</p>
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
                        <span className={styles.vehicle_price}>${vehicle.price}*</span>
                    </div>
                    <p className={styles.warn_message}>*Rates,taxes and fess do not reflect rates, taxes and fees applicable to non-included optional covarages or extras added later. Pay Later charges will be in your destination's local currency.</p>
                </div>
            </div>
            <div className={styles.right_cards}>
                <div className={styles.form}>
                    <div className={styles.form_header}>
                        <h3 className={styles.info_title}>Contact Details</h3>
                    </div>
                    <form id="reservationForm" action="/submit" method="post">
                        <div className={styles.form_names}>
                            <Input label="First Name" type="text" id="firstName" name="firstName" required />
                            <Input label="Last Name" type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className={styles.form_infos}>
                            <Input label="Phone Number" type="tel" id="phone" name="phone" required />
                            <Input label="Email Address" type="email" id="email" name="email" required />
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
                            <span className={styles.vehicle_price}>${vehicle.price}*</span>
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
