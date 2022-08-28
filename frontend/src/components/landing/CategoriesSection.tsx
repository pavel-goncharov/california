import {FC} from 'react';
import classes from 'src/styles/components/landing/CategoriesSection.module.scss';
import CategoryItem from 'src/components/landing/items/CategoryItem';
import {categorySection} from 'src/static/landing';

const CategoriesSection: FC = () => {
  return (
    <section className={classes.categories}>
      <p className={classes.title}>{categorySection.title}</p>
      <p className={classes.subtitle}>{categorySection.description}</p>
      <div className={classes.items}>
        {categorySection.items.map(item => 
          <CategoryItem item={item} key={item.id}/>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;