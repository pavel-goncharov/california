import {FC} from 'react';
import classes from 'src/styles/components/landing/items/CategoryItem.module.scss';
import {ICategoryItem} from 'src/types/landing.types';

interface IProps {
  item: ICategoryItem;
}

const CategoryItem: FC<IProps> = ({item}) => {
  return (
    <div id={item.idCSS} className={classes.item}>
      <img src={item.img.src} alt={item.img.src}/>
      <div>
        <p className={classes.category}>{item.title}</p>
        <span className={classes.title}>{item.description}</span>
      </div>
    </div>
  );
};

export default CategoryItem;