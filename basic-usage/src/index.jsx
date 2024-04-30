import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/global.css';

import Root from './pages/root';
import TestUseRefWithDom from './pages/test-use-ref-with-dom';
import TestUseRef from './pages/test-use-ref';
import Coins from './pages/coins';
import TestUseContext from './pages/test-use-context';
import ForwardRef from './pages/forward-ref';
import InputCheckbox from './pages/input-checkbox';
import Props from './pages/props';
import PropsWithRendering from './pages/props-with-rendering';
import TestUseEffect from './pages/test-use-effect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'use-effect',
        element: <TestUseEffect />
      },
      {
        path: 'use-ref',
        element: <TestUseRef />
      },
      {
        path: 'use-ref-with-dom',
        element: <TestUseRefWithDom />
      },
      {
        path: 'use-context',
        element: <TestUseContext />
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
        path: 'props-with-rendering',
        element: <PropsWithRendering />
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
