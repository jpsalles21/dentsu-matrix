interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    required: boolean;
    width?: string;
    height?: string; 
}

const Input = ({ label, type, placeholder, required, width, height }: InputProps) => {
    return (
        <div className="input">
            <label htmlFor="">{required && <span>*</span>}{label} </label>
            <input
                type={type}
                placeholder={placeholder}
                style={{width, height}}
            />
        </div>
    );
}

export default Input