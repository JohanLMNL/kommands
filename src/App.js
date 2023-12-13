import logo from './logo.svg';
import './App.css';
import { Provider } from './context';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Kommands from './pages/Kommands';
import ThermalPrinter from './ThermalPrinter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/kommands',
    element: <Kommands></Kommands>,
  },
  {
    path: '/print',
    element: <ThermalPrinter />,
  },
]);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
