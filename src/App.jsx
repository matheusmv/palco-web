import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
