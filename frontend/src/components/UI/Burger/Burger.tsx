import {FC} from 'react';
import classes from 'src/components/UI/Burger/Burger.module.scss';

interface Props {
  onClick: () => void;
}

const Burger: FC<Props> = ({onClick}) => {
  return (
    <button className={classes.burger} onClick={onClick}>
      <div className={classes.line}/>
      <div className={classes.line}/>
      <div className={classes.line}/>
    </button>
  );
};

export default Burger;