'use client'
import styles from './Button.module.css'

interface ButtonProps {
    onClick?: (value: any) => any;
    content: string;
    variant: 'white' | 'black';
    width?: string;
    height?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ onClick, content, variant, width, height, disabled = false, type }: ButtonProps) => {
    
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
            style={{ width: `${width}`, height: `${height}` }}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

export default Button;