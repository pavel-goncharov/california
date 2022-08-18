import {IImgItem} from './common.types';

type IItemType = {
  title: string;
  description: string;
  cost: number;
  image: string;
};

export interface IItemNewData extends IItemType {};

export interface IItem extends IItemType {
  _id: string;
};

interface ISectionHead {
  title: string;
  description: string;
};

export interface ISlideItem extends ISectionHead {
  id: number;
  link: string; 
  img: IImgItem;
};

export interface ICategoryItem extends ISlideItem { 
  idCSS: string;
  group: number;
};

export interface ICategorySection extends ISectionHead {
  items: ICategoryItem[];
};

export type TSortByGroup = {
  firstGroup: ICategoryItem[];
  secondGroup: ICategoryItem[];
};

export interface IMostSelledSection extends ISectionHead {};

export interface IBestAroundItem extends ISlideItem {};

export interface IBestAroundSection extends ISectionHead {
  items: IBestAroundItem[];
};

export interface IIdeasSection extends ISectionHead {
  img: IImgItem;
  infoParagraphs: string[];
};

export interface IAnythingElseSection {
  title: string;
  imgSearch: IImgItem;
  tags: string[];
};

export interface INeverMissSection extends ISectionHead {
  img: IImgItem;
};

export interface IFooterLink {
  [key: string]: string [];
};

export interface IFooter {
  logo: IImgItem;
  description: string;
  links: IFooterLink;
};