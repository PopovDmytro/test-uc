import { GrClose } from 'react-icons/gr';
import classes from './KeyWord.module.css';

export const KeyWord = ({ children, removeKeyWord }) => {
  return (
    <div className={classes.Item}>
      {children}
      <GrClose onClick={removeKeyWord} className={classes.Icon} />
    </div>
  );
};
