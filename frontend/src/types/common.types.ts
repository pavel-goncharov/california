export interface IImgItem {
  src: string;
  alt: string;
}

export interface IImgCollection {
  [key: string]: IImgItem
};