import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from 'src/components/AppRouter';
import Header from 'src/components/Header';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;