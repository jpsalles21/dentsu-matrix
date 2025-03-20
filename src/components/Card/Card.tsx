import React from 'react';
import styles from './Card.module.css'
import Image from 'next/image';

interface CardProps {
    title: string,
    content: string,
    icon: string;
}

const Card = ({ title, content, icon }: CardProps) => {
    return (
        <div className={styles.card__container}>
                <Image
                    className={styles.logo}
                    src={icon}
                    alt="Logo"
                    width={40}
                    height={40}
                    />
            <div className={styles.card__container__content}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Card;