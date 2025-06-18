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

          
        </div>
    );
};

export default BookingSteps;
