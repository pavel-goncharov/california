import titleSvg from 'src/assets/svg/title.svg';
import basketSvg from 'src/assets/svg/basket.svg';
import searchSvg from 'src/assets/svg/search.svg';
import {IImgCollection} from 'src/types/common.types';

export const headerSvgs: IImgCollection = {
  title: {
    src: titleSvg,
    alt: 'title' 
  },
  basket: {
    src: basketSvg,
    alt: 'basket'
  },
  search: {
    src: searchSvg,
    alt: 'search'
  }
};

export const navLinks: string[] = ['all products', 'solutions', 'about', 'support'];
export const navLinkWithArrow: string = 'solutions';