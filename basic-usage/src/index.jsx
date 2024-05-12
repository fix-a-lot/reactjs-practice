import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/global.css';

import Root from './pages/root';
import TestUseRefWithDom from './pages/test-use-ref-with-dom';
import TestUseRef from './pages/test-use-ref';
import Coins from './pages/etc/coins';
import TestUseContext from './pages/test-use-context';
import ForwardRef from './pages/forward-ref';
import InputCheckbox from './pages/input-checkbox';
import Props from './pages/props';
import PropsWithRendering from './pages/props-with-rendering';
import TestUseEffect from './pages/test-use-effect';
import CustomHooks from 'pages/custom-hooks';
import TestUseMemo from 'pages/test-use-memo';
import UnifiedUseState from 'pages/unified-use-state';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'etc/coins',
        element: <Coins />
      },
      {
        path: 'custom-hooks',
        element: <CustomHooks />
      },
      {
        path: 'forward-ref',
        element: <ForwardRef />
      },
      {
        path: 'input-checkbox',
        element: <InputCheckbox />
      },
      {
        path: 'props-with-rendering',
        element: <PropsWithRendering />
      },
      {
        path: 'props',
        element: <Props />
      },
      {
        path: 'test-use-context',
        element: <TestUseContext />
      },
      {
        path: 'use-effect',
        element: <TestUseEffect />
      },
      {
        path: 'test-use-memo',
        element: <TestUseMemo />
      },
      {
        path: 'use-ref-with-dom',
        element: <TestUseRefWithDom />
      },
      {
        path: 'test-use-ref',
        element: <TestUseRef />
      },
      {
        path: 'unified-use-state',
        element: <UnifiedUseState />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
