import {FC} from 'react';
import classes from 'src/styles/components/landing/Footer.module.scss';
import {footer} from 'src/static/landing';

const Footer: FC = () => {
  const {logo, description, links} = footer;
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo.src} alt={logo.alt}/>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.linksBox}>
        <ul className={classes.links}>
          {Object.keys(links).map(link => 
            <li key={link}>
              <p className={classes.link}>{link}</p>
              <ul>
                {links[link].map((subLink: string) =>
                  <li className={classes.subLink} key={subLink}>{subLink}</li>
                )}
              </ul>
          </li>
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;