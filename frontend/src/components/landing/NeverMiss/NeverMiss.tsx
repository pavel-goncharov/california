import {FC} from 'react';
import {btnTitles, inputPlaceholders, inputTypes} from 'src/constants/UI';
import {neverMissSection} from 'src/pages/Landing/landing.static';
import classes from 'src/components/landing/NeverMiss/NeverMiss.module.scss';

const NeverMiss: FC = () => {
  const {title, description, img} = neverMissSection;
  return (
    <section className={classes.neverMiss}>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <img src={img.src} alt={img.alt}/>
      <div className={classes.search}>
        <input type={inputTypes.TEXT} placeholder={inputPlaceholders.EMAIL}/>
        <button>{btnTitles.SIGN_UP}</button>
      </div>
    </section>
  );
};

export default NeverMiss;