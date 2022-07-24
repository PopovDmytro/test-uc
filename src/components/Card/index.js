import classes from './Card.module.css';

export const Card = ({ children, className = '' }) => {
  return <div className={`${classes.Card} ${className}`}>{children}</div>;
};
