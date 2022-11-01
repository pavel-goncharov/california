import {FC} from 'react';
import classes from 'src/components/landing/MostSelled/MostSelledItem/MostSelledItem.module.scss';
import {IItem} from 'src/types/landing.types';

interface Props {
  item: IItem
}

const Item: FC<Props> = ({item}) => {
  const cost: string = `$ ${item.cost} USD`;
  return (
    <div key={item._id} className={classes.item}>
      <div className={classes.imgBox}>
        <img src={item.image} alt={item.title}/>
      </div>
      <p className={classes.title}>{item.title}</p>
      <p className={classes.description}>{item.description}</p>
      <p className={classes.cost}>{cost}</p>  
    </div>
  );
};

export default Item;