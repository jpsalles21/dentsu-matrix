'use client'
import { useState, useEffect } from "react";
import { Input, Button } from "@components";
import styles from './BookingWidget.module.css';
import { Location } from "@/types/location";

interface Props {
  locations: Location[];
}

const BookingWidget = ({ locations }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <div className={styles.booking_widget__container}>
            <h1>Reserve a vehicle</h1>
            <form action="" id="form1">
                <div className={styles.booking_widget__container__inputs}>
                    <p>Pick-up & Return Location (ZIP, City or Airport)</p>
                    <Input
                        label="Required field"
                        required={true}
                        placeholder="Provide a Location"
                        list="location-options"
                        value={selectedLocation}
                        onChange={e => setSelectedLocation(e.target.value)}
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
            </form>
            <div className={styles.booking_widget__container__actions}>
                <div className={styles.booking_widget__section}>
                    <p className={styles.booking_widget__container__actions__title}>PICK-UP</p>
                    <div className={styles.booking_widget__container__actions__pick_up_inputs}>
                        <Input label="Date" required={false} className={styles.booking_widget__container__actions__input} />
                        <Input label="Time" required={false} className={styles.booking_widget__container__actions__input} />
                    </div>
                </div>
                <div className={styles.booking_widget__section}>
                    <p className={styles.booking_widget__container__actions__title}>RETURN</p>
                    <div className={styles.booking_widget__container__actions__return_inputs}>
                        <Input label="Date" required={false} className={styles.booking_widget__container__actions__input} />
                        <Input label="Time" required={false} className={styles.booking_widget__container__actions__input} />
                    </div>
                </div>
                <Button variant="black" type="submit" form="form1">Browse Vehicles</Button>
            </div>
        </div>
    );
}

export default BookingWidget;