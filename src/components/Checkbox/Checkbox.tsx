import styles from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>; 
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className={styles.checkbox__container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked} 
        onChange={onChange} 
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
