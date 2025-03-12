'use client'
import React from 'react';
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    variant: 'white' | 'black';
    style?: React.CSSProperties;
    className?: string; 
}

const Button = ({ onClick, children, variant, style, className, disabled = false, type }: ButtonProps) => {

    return (
        <button
            className={`${styles[variant]} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    );
}

export default Button;