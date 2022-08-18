import {FC} from 'react';
import classes from 'src/styles/common/Header.module.scss';
import {headerSvgs, navLinks, navLinkWithArrow} from 'src/static/header';

const Header: FC = () => {
    
  return (
    <div className={classes.header}>
      <img src={headerSvgs.title.src} alt={headerSvgs.title.alt}/>
      <ul className={classes.navLinks}>
        {navLinks.map(navLink => 
          <li className={classes.navLink} key={navLink}>
            <p>{navLink}</p>
            {navLink === navLinkWithArrow &&
              <div className={classes.arrow}/>
            }
          </li>
        )}
      </ul>
      <div className={classes.buttons}>
        <img src={headerSvgs.search.src} alt={headerSvgs.search.alt}/>
        <img src={headerSvgs.basket.src} alt={headerSvgs.basket.alt}/>
      </div>
    </div>
  );
};

export default Header;