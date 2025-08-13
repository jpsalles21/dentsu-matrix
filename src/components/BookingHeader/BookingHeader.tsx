import styles from './BookingHeader.module.css'

interface BookingHeaderProps {
    title: string;
    results?: string;
}

const BookingHeader = ({ title, results }: BookingHeaderProps) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <span>{results}</span>
        </div>
    );
}

export default BookingHeader;