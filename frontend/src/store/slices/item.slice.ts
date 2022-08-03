import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SliceNames} from '../../constants/slices';
import {IItem} from '../../types/item.types';
import {fetchAllItems} from '../thunks/item.thunk';

interface IItemState {
  items: IItem[];
  isLoading: boolean;
  error: string;
}

const initialState: IItemState = {
  items: [],
  isLoading: false,
  error: ''
};

const catalogSlice = createSlice({
  name: SliceNames.ITEM,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllItems.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllItems.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchAllItems.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default catalogSlice;