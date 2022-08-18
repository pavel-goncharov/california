import {bindActionCreators} from '@reduxjs/toolkit';
import {useAppDispatch} from 'src/hooks/useAppDispatch';
import Slices from 'src/store/slices';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(Slices, dispatch);
};