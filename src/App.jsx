import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

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
