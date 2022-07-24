import classes from './Input.module.css';

export const Input = ({
  children,
  className = '',
  Icon = null,
  placeholder = 'Placeholder',
  ...props
}) => {
  return (
    <label className={`${classes.Label} ${className}`} tabIndex={0}>
      <input {...props} className={classes.Input} type="text" placeholder={placeholder} />
      {children}
    </label>
  );
};
