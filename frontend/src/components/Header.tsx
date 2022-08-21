import {FC, useEffect, useState} from 'react';
import classes from 'src/styles/common/Header.module.scss';
import {headerSvgs, navLinks, activeNavLink} from 'src/static/header';
import Burger from './ui/Burger';

const Header: FC = () => {
  const isDesktop: boolean = window.innerWidth > 900;
  const [isShowNavLinks, setIsShowNavLinks] = useState<boolean>(isDesktop);
  const classNavLinks: string = isShowNavLinks ? classes.navLinks : classes.hidden;

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Burger onClick={() => {
          setIsShowNavLinks(!isShowNavLinks);
          console.log(isDesktop, isShowNavLinks, classNavLinks);
        }}/>
        <img src={headerSvgs.title.src} alt={headerSvgs.title.alt}/>
      </div>
      <ul className={classNavLinks}>
        {navLinks.map(navLink => 
          <li className={classes.navLink} key={navLink}>
            <p>{navLink}</p>
            {navLink === activeNavLink &&
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