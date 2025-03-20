import styles from './Checkbox.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>; 
  id: string,
}

const Checkbox = ({ label, checked, onChange, id }: CheckboxProps) => {
  return (
    <div className={styles.checkbox__container}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        checked={checked} 
        onChange={onChange} 
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
