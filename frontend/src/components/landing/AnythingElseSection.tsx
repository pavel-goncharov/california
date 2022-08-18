import {FC} from 'react';
import classes from 'src/styles/components/landing/AnythingElseSection.module.scss';
import {inputPlaceholders, inputTypes} from 'src/static/common';
import {anythingElseSection} from 'src/static/landing';

const AnythingElse: FC = () => {
  const {title, imgSearch, tags} = anythingElseSection;
  return (
    <section className={classes.anythingElse}>
      <p className={classes.title}>{title}</p>
      <div className={classes.inputBox}>
        <img src={imgSearch.src} alt={imgSearch.alt}/>
        <input type={inputTypes.TEXT} placeholder={inputPlaceholders.KEYWORD}/>
      </div>
      <div className={classes.tags}>
        {tags.map(tag => 
          <div className={classes.tag} key={tag}>{tag}</div>
        )}
      </div>
    </section>
  );
};

export default AnythingElse;