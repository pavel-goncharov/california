import {FC} from 'react';
import Slider from 'src/components/landing/Slider/Slider';
import Categories from 'src/components/landing/Categories/Categories';
import MostSelled from 'src/components/landing/MostSelled/MostSelled';
import BestAround from 'src/components/landing/BestAround/BestAround';
import Ideas from 'src/components/landing/Ideas/Ideas';
import AnythingElse from 'src/components/landing/AnythingElse/AnythingElse';
import NeverMiss from 'src/components/landing/NeverMiss/NeverMiss';
import classes from 'src/pages/landing/Landing.module.scss';

const Landing: FC = () => {
  return (
    <main className={classes.landing}>
      <Slider/>
      <Categories/>
      <MostSelled/>
      <BestAround/>
      <Ideas/>
      <AnythingElse/>
      <NeverMiss/>
    </main>
  );
};

export default Landing;