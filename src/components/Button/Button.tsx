'use client'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (value: any) => any;
    variant: 'white' | 'black';
    width?: string;
    height?: string;
}

const Button = ({ onClick, children, variant, width, height, disabled = false, type }: ButtonProps) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (onClick) {
            onClick(event);
        }
    }
    return (
        <button
            className={styles[variant]}
            onClick={handleClick}
            type={type}
            disabled={disabled}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {children}
        </button>
    );
}

export default Button;