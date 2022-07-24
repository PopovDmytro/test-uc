import classes from './Option.module.css';

export const Option = ({ value, children, toggleValue }) => {
  return (
    <li onClick={() => toggleValue(value)} className={classes.Option} data-value={value}>
      {children}
    </li>
  );
};
