import {FC} from 'react';
import classes from 'src/components/UI/Footer/Footer.module.scss';
import {footer} from 'src/pages/Landing/landing.static';

const Footer: FC = () => {
  const {logo, description, links} = footer;
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo.src} alt={logo.alt}/>
        <p className={classes.description}>{description}</p>
      </div>
      <ul className={classes.links}>
        {Object.keys(links).map(link => 
          <li className={classes.linkGroup} key={link}>
            <p className={classes.titleLink}>{link}</p>
            <ul>
              {links[link].map((subLink: string) =>
                <li className={classes.titleSubLink} key={subLink}>{subLink}</li>
              )}
            </ul>
        </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;