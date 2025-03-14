import Button from "@/components/Button/Button";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header__container}>
            <div className={styles.header__container__title}>
                <h2>dentsu Matrix</h2>
            </div>
            <div className={styles.header__container__actions}>
                <a href="">Career</a>
                <a href="">Help</a>
                <Button variant="white">Sign in / Join</Button>
            </div>

        </header>
    );
}

export default Header; 