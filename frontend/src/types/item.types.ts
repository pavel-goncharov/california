type IItemType = {
  title: string;
  description: string;
  cost: number;
  image: string;
};

export interface IItemNewData extends IItemType {};

export interface IItem extends IItemType {
  _id: string;
}