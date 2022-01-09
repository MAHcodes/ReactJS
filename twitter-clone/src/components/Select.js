import { IoChevronDown } from "react-icons/io5";
import styles from "./Select.module.css";

const Select = ({ title, options }) => {
  return (
    <div className={styles.selectBox}>
      <p className={styles.title}>{title}</p>
      <IoChevronDown className={styles.arrowDown} />
      <select defaultValue="">
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
