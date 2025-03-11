'use client'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    variant: 'white' | 'black';
    width?: string;
    height?: string;
}

const Button = ({ onClick, children, variant, width, height, disabled = false, type }: ButtonProps) => {

    return (
        <button
            className={styles[variant]}
            onClick={onClick}
            type={type}
            disabled={disabled}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {children}
        </button>
    );
}

export default Button;