import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes} from '../constants/routes';

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(route => 
        <Route path={route.path} element={<route.element/>} key={route.path}/>
      )}
    </Routes>
  );
};

export default AppRouter;