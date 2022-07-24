import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Option } from './Option';
import classes from './Select.module.css';
import useClickOutside from '../../hooks/useClickOutside';

export const Select = ({
  selectValue = null,
  className = '',
  options = [],
  onValueChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  useClickOutside(selectRef, () => setIsOpen(false));

  const toggleValue = (value) => {
    const option = options.find((option) => option.value === value);
    if (option) {
      setIsOpen(false);
      onValueChange(option);
    }
  };

  return (
    <div
      ref={selectRef}
      className={`${classes.Select} ${isOpen ? classes.Active : ''} ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)} className={classes.Placeholder}>
        <span>{selectValue?.text}</span>
        <FaChevronDown className={classes.Icon} />
      </div>
      <ul className={classes.OptionsList}>
        {options.map(({ text, value }) => (
          <Option key={value} toggleValue={toggleValue} value={value}>
            {text}
          </Option>
        ))}
      </ul>
    </div>
  );
};
