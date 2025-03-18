import styles from './Footer.module.css'

const Footer = ({children}: React.ComponentProps<"footer">) => {
    return (
        <footer className={styles.footer__container}>{children}</footer>
    );
}

export default Footer;