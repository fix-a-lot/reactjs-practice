import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/global.css';

import Root from './pages/root';
import UseRefWithDom from './pages/use-ref-with-dom';
import UseRef from './pages/use-ref';
import Coins from './pages/coins';
import UseContext from './pages/use-context';
import Props from './pages/props';
import ForwardRef from './pages/forward-ref';
import InputCheckbox from './pages/input-checkbox';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'use-ref',
        element: <UseRef />
      },
      {
        path: 'use-ref-with-dom',
        element: <UseRefWithDom />
      },
      {
        path: 'use-context',
        element: <UseContext />
      },
      {
        path: 'coins',
        element: <Coins />
      },
      {
        path: 'props',
        element: <Props />
      },
      {
        path: 'forward-ref',
        element: <ForwardRef />
      },
      {
        path: 'input-checkbox',
        element: <InputCheckbox />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
