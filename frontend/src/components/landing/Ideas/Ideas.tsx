import {FC} from 'react';
import classes from 'src/components/landing/Ideas/Ideas.module.scss';
import {ideasSection} from 'src/pages/Landing/landing.static';
import {btnTitles} from 'src/constants/UI';

const Ideas: FC = () => {
  return (
    <section className={classes.ideas}>
      <p className={classes.title}>{ideasSection.title}</p>
      <p className={classes.description}>{ideasSection.description}</p>
      <div className={classes.content}>
        <img src={ideasSection.img.src} alt={ideasSection.img.alt}/>
        <div className={classes.info}>
          {ideasSection.infoParagraphs.map((paragraph, index) => 
            <p key={index}>{paragraph}</p>
          )}
        </div>
      </div>
      <div className={classes.seeAll}>
        <p>{btnTitles.SEE_ALL}</p>
        <div className={classes.arrow}>
          <div className={classes.shaft}/>
        </div>
      </div>
    </section>
  );
};

export default Ideas;