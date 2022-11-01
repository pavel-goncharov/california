import {FC} from 'react';
import classes from 'src/components/landing/BestAround/BestAround.module.scss';
import BestAroundItem from 'src/components/landing/BestAround/BestAroundItem/BestAroundItem';
import {bestAroundSection} from 'src/pages/Landing/landing.static';

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