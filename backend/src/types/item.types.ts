import {ObjectId} from './common.types';

type IItemType = {
  title: string;
  description: string;
  cost: number;
  image: string;
};

export interface IItemSchema extends IItemType {};
export interface IItemNewData extends IItemType {};

export interface IItem extends IItemType {
  _id: ObjectId;
}