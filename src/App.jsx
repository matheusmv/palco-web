import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
