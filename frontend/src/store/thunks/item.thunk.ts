import {createAsyncThunk} from '@reduxjs/toolkit';
import {host} from 'src/api';
import {ItemRoutes} from 'src/constants/api';
import {IItem} from 'src/types/landing.types';

export const fetchAllItems = createAsyncThunk(
  ItemRoutes.ITEM,
  async function (_, thunkAPI) {
    try {
      const items: IItem[] = (await host.get(ItemRoutes.ALL)).data;
      return items;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error on fetch items');
    }
  }
);