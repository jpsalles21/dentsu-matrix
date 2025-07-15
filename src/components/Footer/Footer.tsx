import styles from './Footer.module.css'

const Footer = ({children}: React.ComponentProps<"footer">) => {
    return (
        <footer className={styles.footer__container}>{children || '© 2025 Dentsu. All Rights Reserved'}</footer>
    );
}

export default Footer;