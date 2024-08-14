import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/global.css';

import Root from './pages/root';
import TestUseRefWithDom from './pages/hooks/test-use-ref-with-dom';
import TestUseRef from './pages/hooks/test-use-ref';
import Coins from './pages/etc/coins';
import TestUseContext from './pages/hooks/test-use-context';
import ForwardRef from './pages/hooks/forward-ref';
import InputCheckbox from './pages/tags/input-checkbox';
import Props from './pages/props/props';
import PropsWithRendering from './pages/props/props-with-rendering';
import TestUseEffect from './pages/hooks/test-use-effect';
import CustomHooks from 'pages/hooks/custom-hooks';
import TestUseMemo from 'pages/hooks/test-use-memo';
import UnifiedUseState from 'pages/hooks/unified-use-state';
import TestUseReducer2 from 'pages/hooks/test-use-reducer-2';
import TestUseReducer1 from 'pages/hooks/test-use-reducer-1';
import ScratchPad from 'pages/etc/scratch-pad';

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
        path: 'hooks/custom-hooks',
        element: <CustomHooks />
      },
      {
        path: 'hooks/forward-ref',
        element: <ForwardRef />
      },
      {
        path: 'tags/input-checkbox',
        element: <InputCheckbox />
      },
      {
        path: 'props/props-with-rendering',
        element: <PropsWithRendering />
      },
      {
        path: 'props/props',
        element: <Props />
      },
      {
        path: 'etc/scratch-pad',
        element: <ScratchPad />
      },
      {
        path: 'hooks/test-use-context',
        element: <TestUseContext />
      },
      {
        path: 'hooks/use-effect',
        element: <TestUseEffect />
      },
      {
        path: 'hooks/test-use-memo',
        element: <TestUseMemo />
      },
      {
        path: 'hooks/test-use-reducer-1',
        element: <TestUseReducer1 />
      },
      {
        path: 'hooks/test-use-reducer-2',
        element: <TestUseReducer2 />
      },
      {
        path: 'hooks/use-ref-with-dom',
        element: <TestUseRefWithDom />
      },
      {
        path: 'hooks/test-use-ref',
        element: <TestUseRef />
      },
      {
        path: 'hooks/unified-use-state',
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
