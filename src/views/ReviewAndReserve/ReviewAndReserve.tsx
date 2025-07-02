'use client'
import { Button, Input } from "@/components";
import { useBookingContext } from "@/context/BookingContext";
import { Vehicle } from "@/types";
import { useEffect } from "react";
import styles from './ReviewAndReserve.module.css'

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
            <div className={styles.rental_details}>
                <h3>Rental Details</h3>
                <p>Dates & Times</p>
            </div>
            <div className={styles.form}>
                <div className={styles.form_header}>
                    <h3 className={styles.form_title}>Contact Details</h3>
                </div>
                <form id="reservationForm" action="/submit" method="post">
                    <div className={styles.form_names}>
                        <Input label="First Name" type="text" id="firstName" name="firstName" required />
                        <Input label="Last Name" type="text" id="lastName" name="lastName" required />
                    </div>
                    <Input label="Phone Number" type="tel" id="phone" name="phone" required />
                    <Input label="Email Address" type="email" id="email" name="email" required />

                </form>
            </div>
            <Button form="reservationForm" variant="black" type="submit">Reserve</Button>
        </div>
    );
}

export default ReviewAndReserve;
