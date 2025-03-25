import Button from "@/components/Button/Button";
import styles from './Header.module.css'
import Image from "next/image";


const Header = () => {
    return (
        <header className={styles.header__container}>
            <div className={styles.header__container__upper}>
                <div className={styles.header__container__upper__title}>
                    <h2>dentsu <span className={styles.header__container__upper__title__span}>Matrix</span></h2>
                    
                </div>
                <div className={styles.header__container__upper__actions}>
                    <a href="" className={styles.header__container__upper__actions_a}>Career</a>
                    <a href="" className={styles.header__container__upper__actions_a}>Help</a>
                    <Button variant="white">Sign in / Join</Button>
                    <span className={styles.header__container__upper__actions__menu}>
                    <Image
                    src={'/Menu.svg'}
                    alt="Logo"
                    width={40}
                    height={40}
                    />
                    </span>
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