import {FC, useEffect} from 'react';
import {Alert} from '@mui/material';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {useAppSelector} from '../hooks/useAppSelector';
import {fetchAllItems} from '../store/thunks/item.thunk';

const Landing: FC = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(state => state.item.items);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <div>
      <div>Landing</div>
      <Alert severity="success" style={{color: "red"}}>This is a success alert — check it out!</Alert>
      {items.map(item => 
        <div key={item._id} style={{margin:'10px', border: '2px solid black'}}>
          <div>{item.image}</div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.cost}</div>
        </div>
      )}
    </div>
  );
};

export default Landing;