import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    required: boolean; 
    style?: React.CSSProperties;
}

const Input = ({ label, type = 'text', placeholder, required, style }: InputProps) => {
    return (
        <div className={styles.input__container}>
            <label htmlFor="">{required && <span>* </span>}{label} </label>
            <input
                type={type}
                placeholder={placeholder}
                style={style}
            />
        </div>
    );
}

export default Input