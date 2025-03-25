import Button from "@/components/Button/Button";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header__container}>
            <div className={styles.header__container__upper}>
                <div className={styles.header__container__upper__title}>
                    <h2>dentsu Matrix</h2>
                </div>
                <div className={styles.header__container__upper__actions}>
                    <a href="">Career</a>
                    <a href="">Help</a>
                    <Button variant="white">Sign in / Join</Button>
                </div>
            </div>
            <nav className={styles.header__container__nav}>
                <ul className={styles.header__container__nav__ul}>
                    <li className={styles.header__container__nav__li}><a href="">Reservations</a></li>
                    <li className={styles.header__container__nav__li}><a href="">Reservations</a></li>
                    <li className={styles.header__container__nav__li}><a href="">Reservations</a></li>
                    <li className={styles.header__container__nav__li}><a href="">Reservations</a></li>
                    <li className={styles.header__container__nav__li}><a href="">Reservations</a></li>
                    <li className={styles.header__container__nav__li }style={{ borderRight: "none" }}><a href="">Reservations</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 