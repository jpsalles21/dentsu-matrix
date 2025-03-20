'use client'
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from './BookingWidget.module.css'

const BookingWidget = () => {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }
    return (
        <div className={styles.booking_widget__container}>
            <h1>Reserve a vehicle</h1>
            <form action="" id="form1"> {/* temporary placeholder until the API is ready */}
                <div className={styles.booking_widget__container__inputs}>
                    <p>Pick-up & Return Location (ZIP, City or Airport)</p>
                    <Input label="Required field" required={true} placeholder="Provide a Location" />
                </div>
            </form>
            <div className={styles.booking_widget__container__actions}>
                <Checkbox label="Return to a different location" checked={isChecked} onChange={handleCheckboxChange} id="checkbox" form="form1" />
                <Button variant="black" type="submit" form="form1">Search</Button>
            </div>

        </div>
    );
}

export default BookingWidget;