import {Schema, model} from 'mongoose';
import Models from '../constants/models';
import {IItemSchema} from '../types/item.types';

const strField = {type: String, required: true};
const numberField = {type: Number, required: true};

const Item = new Schema<IItemSchema>(
  {
    title: strField,
    description: strField,
    cost: numberField,
    image: strField
  }, 
  {
    versionKey: false
  }
);

export default model(Models.ITEM, Item);