import {FC} from 'react';
import {btnTitles} from 'src/constants/UI';
import classes from 'src/components/landing/BestAround/BestAroundItem/BestAroundItem.module.scss';
import {IBestAroundItem} from 'src/types/landing.types';

interface Props {
  item: IBestAroundItem;
}

const BestAroundItem: FC<Props> = ({item}) => {
  return (
    <div className={classes.item}>
      <p className={classes.tag}>{item.title}</p>
      <p className={classes.title}>{item.description}</p>
      <button className={classes.btn}>{btnTitles.EXPLORE}</button>
      <img src={item.img.src} alt={item.img.alt}/>
    </div>
  );
};

export default BestAroundItem;