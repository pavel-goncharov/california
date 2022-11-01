import laptops from 'src/assets/img/laptops.png';
import watch from 'src/assets/img/watch.png';
import phones from 'src/assets/img/phones.png';
import tablet from 'src/assets/img/tablet.png';

import watches from 'src/static/img/bestAround/LatestAndGratest1.png';
import laptopAndPhones from 'src/static/img/bestAround/bestSelling.png';
import laptopAndPhone from 'src/static/img/bestAround/everyProduct.png';
import imgIdeas from 'src/assets/img/ideas.png';
import searchSvg from 'src/assets/svg/search.svg';
import imgNeverMiss from 'src/assets/img/neverMiss.png';
import logo from 'src/assets/svg/title.svg';
import idSelectors from 'src/components/landing/Categories/CategoryItem/CategoryItemId.module.scss';
import {IAnythingElseSection, IBestAroundItem, IBestAroundSection, 
  ICategoryItem, ICategorySection, IFooter, IFooterLink, IIdeasSection,
  IMostSelledSection, INeverMissSection, ISlideItem
} from 'src/types/landing.types';
import iphonePng from 'src/assets/img/iphone.png';
import {IImgCollection} from 'src/types/common.types';

const landingImgs: IImgCollection = {
  iphone: {
    src: iphonePng,
    alt: 'iphone'
  },
  laptop: {
    src: laptops, 
    alt: 'laptops'
  },
  watch: {
    src: watch,
    alt: 'watch'
  },
  phones: {
    src: phones,
    alt: 'phones'
  },
  tablet: {
    src: tablet,
    alt: 'tablet'
  },
  watches: {
    src: watches,
    alt: 'watches'
  },
  laptopAndPhones: {
    src: laptopAndPhones,
    alt: 'laptop and phones'
  },
  laptopAndPhone: {
    src: laptopAndPhone,
    alt: 'laptop and phone' 
  },
  ideas: {
    src: imgIdeas,
    alt: 'ideas'
  },
  search: {
    src: searchSvg,
    alt: 'search'
  },
  neverMiss: {
    src: imgNeverMiss,
    alt: 'apple'
  },
  logo: {
    src: logo,
    alt: 'logo'
  }
};

export const slides: ISlideItem[] = [
  {
    id: 1,
    title: 'The new phones are here take a look', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.', 
    link: '', 
    img: landingImgs.iphone
  }
];

export const categoryItems: ICategoryItem[] = [
  {
    id: 1, 
    idCSS: idSelectors.itemLaptop, 
    title: 'Laptops', 
    description: 'True Laptop Solution',
    img: landingImgs.laptop, 
    link: ''
  },
  {
    id: 2, 
    idCSS: idSelectors.itemWatch, 
    title: 'Watch', 
    description: 'Not just stylisht',
    img: landingImgs.watch,
    link: ''
  },
  {
    id: 3, 
    idCSS: idSelectors.itemPhone, 
    title: 'Phones', 
    description: 'Your day to day life',
    img: landingImgs.phones,
    link: '' 
  },
  {
    id: 4, 
    idCSS: idSelectors.itemTablet, 
    title: 'Tablet', 
    description: 'Empower your work',
    img: landingImgs.tablet,
    link: ''
  }
];

export const categorySection: ICategorySection = {
  title: 'Shop our latest offers and categories',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, 
    aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit.`,
  items: categoryItems
};

export const mostSelledSection: IMostSelledSection = {
  title: 'Save on our most selled items.',
  description: 'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™'
}; 

const bestAroundItems: IBestAroundItem[] = [
  {
    id: 1, 
    title: 'Smart light bulb pack', 
    description: 'Latest and gratest', 
    img: landingImgs.watches,
    link: ''
  },
  {
    id: 2, 
    title: 'Smart light bulb pack', 
    description: 'Best selling', 
    img: landingImgs.laptopAndPhones,
    link: ''
  },
  {
    id: 3, 
    title: 'Smart light bulb pack', 
    description: 'Every product', 
    img: landingImgs.laptopAndPhone, 
    link: ''
  }
];

export const bestAroundSection: IBestAroundSection = {
  title: 'See the best around here',
  description: 'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™',
  items: bestAroundItems
};

const infoParagraphs: string[] = [
  'We Make It Easy To Find The Great Design Talent, Easier...',
  'Road Design Handbook For The International Road...',
  'The Best Kept Secrets About Creative People',
  'We Make It Easy To Find The Great Design Talent, Easier...'
];

export const ideasSection: IIdeasSection = {
  title: 'Ideas have a place here',
  description: 'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™',
  img: landingImgs.ideas,
  infoParagraphs
};

export const anythingElseSection: IAnythingElseSection = {
  title: 'Looking for anything else?',
  imgSearch: landingImgs.search,
  tags: ['iPhone', 'Charger', 'Gift', 'Google Pixel 3', 'Keyboard', 
    '13 Pro Max', 'iPhone 12', 'Laptop', 'Mobile'
  ]
};

export const neverMissSection: INeverMissSection = {
  title: 'Never miss a thing',
  description: 'Sign up for texts to be notified about our best offers on the perfect gifts.',
  img: landingImgs.neverMiss
}

const links: IFooterLink = {
  'All products': ['Phones', 'Watch', 'Tablet', 'Laptops'],
  'Company': ['About', 'Support'],
  'Support': ['Style Guide', 'Licensing', 'Change Log', 'Contact'],
  'Follow Us': ['Instagram', 'Facebook', 'LinkedIn', 'YouTube']
};

export const footer: IFooter = {
  logo: landingImgs.logo,
  description: 'Sign up for texts to be notified about our best offers on the perfect gifts.',
  links
};