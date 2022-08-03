import axios from 'axios';
import {API_URL} from './config';

export const $host = axios.create({
  baseURL: API_URL,
});

export enum Routes {
  ITEM = '/item'
};

export const ItemRoutes = {
  ALL: Routes.ITEM + '/all',
  NEW: Routes.ITEM + '/new', 
  ITEM: Routes.ITEM + '/:id'
};

export const ItemThunkPrefixes = {
  ALL: Routes.ITEM + '/all',
  NEW: Routes.ITEM + '/new', 
  FETCH: Routes.ITEM + '/fetch'
}