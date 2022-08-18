import {FC} from 'react';
import classes from 'src/styles/components/landing/BestAroundSection.module.scss';
import BestAroundItem from 'src/components/landing/items/BestAroundItem';
import {bestAroundSection} from 'src/static/landing';

const BestAround: FC = () => {
  return (
    <section className={classes.bestAround}>
      <p className={classes.title}>{bestAroundSection.title}</p>
      <p className={classes.description}>{bestAroundSection.description}</p>
      <div className={classes.items}>
        {bestAroundSection.items.map(item => 
          <BestAroundItem item={item} key={item.id}/>
        )}
      </div>
    </section>
  );
};

export default BestAround;