import {createAsyncThunk} from "@reduxjs/toolkit";
import {$host, ItemRoutes, ItemThunkPrefixes} from "src/constants/api";
import {IItem} from "src/types/landing.types";

export const fetchAllItems = createAsyncThunk(
  ItemThunkPrefixes.FETCH,
  async function (_, thunkAPI) {
    try {
      const items: IItem[] = (await $host.get(ItemRoutes.ALL)).data;
      return items;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error on fetch items');
    }
  }
);