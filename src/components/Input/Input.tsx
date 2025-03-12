interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    required: boolean;
}

const Input = ({ label, type, placeholder, required }: InputProps) => {
    return (
        <div className="input">
            <label htmlFor="">{required && <span>*</span>}{label} </label>
            <input
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input