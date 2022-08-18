import {FC, useState} from 'react';
import classes from 'src/styles/components/landing/SliderSection.module.scss';
import {slides} from 'src/static/landing';
import {ISlideItem} from 'src/types/landing.types';
import { btnTitles } from 'src/static/common';

const Slider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<ISlideItem>(slides[0]);
  return (
    <section className={classes.slider}>
      <div className={classes.textBox}>
        <p className={classes.title}>{currentSlide.title}</p>
        <p className={classes.description}>{currentSlide.description}</p>
        <button className={classes.btn}>{btnTitles.EXPLORE}</button>
      </div>
      <div className={classes.imageBox}>
        <img src={currentSlide.img.src} alt={currentSlide.img.alt}/>
      </div>   
      <div className={classes.leftArrow}/>
      <div className={classes.rightArrow}/>
      <div className={classes.paginationBox}>
        <div className={classes.paginationItem}/>
        <div className={classes.paginationItem}/>
        <div className={classes.paginationItem}/>
      </div>
    </section>
  );
};

export default Slider;