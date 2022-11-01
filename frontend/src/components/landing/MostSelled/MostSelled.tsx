import {FC, useEffect} from 'react';
import classes from 'src/components/landing/MostSelled/MostSelled.module.scss';
import {useAppSelector} from 'src/hooks/useAppSelector';
import {useAppDispatch} from 'src/hooks/useAppDispatch';
import {fetchAllItems} from 'src/store/thunks/item.thunk';
import MostSelledItem from 'src/components/landing/MostSelled/MostSelledItem/MostSelledItem';

import imgMacBookPro13 from 'src/static/img/mostSelled/MacBookPro13.png';
import imgGalaxyWatch3 from 'src/static/img/mostSelled/GalaxyWatch3.png';
import imgMacBookAirM1 from 'src/static/img/mostSelled/MacBookAirM1.png';
import imgIPad from 'src/static/img/mostSelled/iPad.png';
import {IItem} from 'src/types/landing.types';
import {mostSelledSection} from 'src/pages/Landing/landing.static';

const MostSelected: FC = () => {
  // const items = useAppSelector(state => state.item.items);
  
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllItems());
  // }, []);

  const items: IItem[] = [
    {_id: '1', title: 'MacBook Pro 13', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', cost: 1200000, image: imgMacBookPro13},
    {_id: '2', title: 'Smart Galaxy Watch 3', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', cost: 19900, image: imgGalaxyWatch3},
    {_id: '3', title: 'MacBook Air M1', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', cost: 100900, image: imgMacBookAirM1},
    {_id: '4', title: 'iPad', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', cost: 61000, image: imgIPad}
  ];

  return (
    <section className={classes.mostSelected}>
      <p className={classes.title}>{mostSelledSection.title}</p>
      <p className={classes.description}>{mostSelledSection.description}</p>
      <div className={classes.items}>
        {items.map(item => 
          <MostSelledItem item={item} key={item._id}/>
        )}
      </div>
    </section>
  );
};

export default MostSelected;