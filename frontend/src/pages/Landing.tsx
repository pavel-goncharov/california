import {FC} from 'react';
import SliderSection from 'src/components/landing/SliderSection';
import CategoriesSection from 'src/components/landing/CategoriesSection';
import MostSelledSection from 'src/components/landing/MostSelledSection';
import BestAroundSection from 'src/components/landing/BestAroundSection';
import IdeasSection from 'src/components/landing/IdeasSection';
import AnythingElseSection from 'src/components/landing/AnythingElseSection';
import NeverMissSection from 'src/components/landing/NeverMissSection';
import Footer from 'src/components/landing/Footer';
import classes from 'src/styles/pages/Landing.module.scss';

const Landing: FC = () => {
  return (
    <div className={classes.landing}>
      <SliderSection/>
      <CategoriesSection/>
      <MostSelledSection/>
      <BestAroundSection/>
      <IdeasSection/>
      <AnythingElseSection/>
      <NeverMissSection/>
      <Footer/>
    </div>
  );
};

export default Landing;