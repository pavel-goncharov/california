import {Types} from 'mongoose';

export type ObjectId = Types.ObjectId;

export interface IMessage {
  message: string;
}