import {FC} from 'react';
import classes from 'src/components/landing/Categories/Categories.module.scss';
import CategoryItem from 'src/components/landing/Categories/CategoryItem/CategoryItem';
import {categorySection} from 'src/pages/Landing/landing.static';

const Categories: FC = () => {
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

export default Categories;