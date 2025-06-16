'use client'
import { useState } from "react";
import { Input, Button } from "@components";
import styles from './BookingWidget.module.css';
import { Location } from "@/types";
import { useBookingContext } from "@/context/BookingContext";
import { useRouter } from "next/navigation";

interface Props {
    locations: Location[];
}

const BookingWidget = ({ locations }: Props) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const router = useRouter();

    const {
        setLocation,
        setPickupInfo,
        setReturnInfo,
    } = useBookingContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validLocation = locations.find(
            (loc) => `${loc.name} - ${loc.address}` === selectedLocation
        );

        if (validLocation && pickupDate && pickupTime && returnDate && returnTime ) {
            setLocation(validLocation);
            setPickupInfo({ date: pickupDate, time: pickupTime });
            setReturnInfo({ date: returnDate, time: returnTime });
            router.push(`/choose-vehicle/${validLocation.id}`)
        }

    };


    return (
        <div className={styles.booking_widget__container}>
            <h1>Reserve a vehicle</h1>
            <form id="form1" onSubmit={handleSubmit}>
                <div className={styles.booking_widget__container__inputs}>
                    <p>Pick-up & Return Location (ZIP, City or Airport)</p>
                    <Input
                        label="Required field"
                        required
                        placeholder="Provide a Location"
                        list="location-options"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    />
                    <datalist id="location-options">
                        {locations.map(location => (
                            <option
                                key={location.id}
                                value={`${location.name} - ${location.address}`}
                            />
                        ))}
                    </datalist>
                </div>

                <div className={styles.booking_widget__container__actions}>
                    <div className={styles.booking_widget__section}>
                        <p className={styles.booking_widget__container__actions__title}>PICK-UP</p>
                        <div className={styles.booking_widget__container__actions__pick_up_inputs}>
                            <Input
                                label="Date"
                                type="date"
                                required={false}
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                className={styles.booking_widget__container__actions__input}
                            />
                            <Input
                                label="Time"
                                type="time"
                                required={false}
                                value={pickupTime}
                                onChange={(e) => setPickupTime(e.target.value)}
                                className={styles.booking_widget__container__actions__input}
                            />
                        </div>
                    </div>
                    <div className={styles.booking_widget__section}>
                        <p className={styles.booking_widget__container__actions__title}>RETURN</p>
                        <div className={styles.booking_widget__container__actions__return_inputs}>
                            <Input
                                label="Date"
                                type="date"
                                required={false}
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                className={styles.booking_widget__container__actions__input}
                            />
                            <Input
                                label="Time"
                                type="time"
                                required={false}
                                value={returnTime}
                                onChange={(e) => setReturnTime(e.target.value)}
                                className={styles.booking_widget__container__actions__input}
                            />
                        </div>
                    </div>

                    <Button variant="black" type="submit" form="form1">Browse Vehicles</Button>
                </div>
            </form>
        </div>
    );
};

export default BookingWidget;
