import {FC} from 'react';
import classes from 'src/styles/components/landing/CategoriesSection.module.scss';
import CategoryItem from 'src/components/landing/items/CategoryItem';
import {categorySection} from 'src/static/landing';
import {sortByGroup} from 'src/utils/sortByGroup';

const CategoriesSection: FC = () => {
  const {firstGroup, secondGroup} = sortByGroup(categorySection.items);
  return (
    <section className={classes.categories}>
      <p className={classes.title}>{categorySection.title}</p>
      <p className={classes.subtitle}>{categorySection.description}</p>
      <div className={classes.items}>
        <div className={classes.itemsOne}>
          {firstGroup.map(item => 
            <CategoryItem item={item} key={item.id}/>
          )}
        </div>
        <div className={classes.itemsTwo}>
          {secondGroup.map(item => 
            <CategoryItem item={item} key={item.id}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;