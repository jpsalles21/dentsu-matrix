'use client'

import { useBookingContext } from '@/context/BookingContext';
import styles from './BookingSteps.module.css';


interface BookingStepsProps {
    currentStep: 'vehicle' | 'review';
}

const BookingSteps = ({ currentStep }: BookingStepsProps) => {

    const { pickupInfo, returnInfo } = useBookingContext();


    return (
        <div className={styles.container}>

            <div className={styles.step}>
                <h3>Rental Details</h3>
                <span className={styles.rental_infos}>{pickupInfo.date} {pickupInfo.time}</span>
                <span className={styles.rental_infos}>{returnInfo.date} {returnInfo.time}</span>
            </div>
            <div className={currentStep === "vehicle" ? styles.selected : styles.step}>
                <h3>Vehicle</h3>
            </div>
            <div className={styles.step}>
                <h3>Extras</h3>
            </div>
            <div className={currentStep === "review" ? styles.selected : styles.step}>
                <h3>Review & Reserve</h3>
            </div>


        </div>
    );
};

export default BookingSteps;
