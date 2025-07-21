import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    required: boolean;
    style?: React.CSSProperties;
    className?: string;
    labelColor?: 'default' | 'black';
}

const Input = ({ label, type = 'text', placeholder, className, required, style, labelColor = 'default', ...rest }: InputProps) => {
    return (
        <div className={styles.input__container}>
            <label
                htmlFor=""
                style={{
                    color: labelColor === 'black' ? 'black' : required ? undefined : 'black',
                    fontWeight: required ? '' : 600,
                }}
            >
                {required && <span>* </span>}
                {label}
            </label>
            <input
                className={`${className}`}
                type={type}
                placeholder={placeholder}
                style={style}
                {...rest}
            />
        </div>
    );
}

export default Input