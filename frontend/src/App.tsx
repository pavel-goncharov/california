import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from 'src/router/AppRouter';
import Header from 'src/components/UI/Header/Header';
import Footer from 'src/components/UI/Footer/Footer';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;