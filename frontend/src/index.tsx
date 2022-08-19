import ReactDOM from 'react-dom/client';
import App from 'src/App';
import {Provider} from 'react-redux';
import {store} from 'src/store/store';
import 'src/styles/index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);