import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './styles/global.css';

import Root from './pages/root';
import UseRefWithDom from './pages/hooks/use-ref-with-dom';
import UseRef from './pages/hooks/use-ref';
import Coins from './pages/etc/coins';
import UseContext from './pages/hooks/use-context';
import ForwardRef from './pages/hooks/forward-ref';
import InputCheckbox from './pages/tags/input-checkbox';
import Props from './pages/props/props';
import PropsWithRendering from './pages/props/props-with-rendering';
import UseEffect from './pages/hooks/use-effect';
import CustomHooks from './pages/hooks/custom-hooks';
import UseMemo from './pages/hooks/use-memo';
import UnifiedUseState from './pages/hooks/unified-use-state';
import UseReducer2 from './pages/hooks/use-reducer-2';
import UseReducer1 from './pages/hooks/use-reducer-1';
import ScratchPad from './pages/etc/scratch-pad';
import UseCallback from './pages/hooks/use-callback';
import ReactRouterHooks from './pages/third-party/react-router/react-router-hooks';

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
        path: 'hooks/use-callback',
        element: <UseCallback />
      },
      {
        path: 'hooks/use-context',
        element: <UseContext />
      },
      {
        path: 'hooks/use-effect',
        element: <UseEffect />
      },
      {
        path: 'hooks/use-memo',
        element: <UseMemo />
      },
      {
        path: 'hooks/use-reducer-1',
        element: <UseReducer1 />
      },
      {
        path: 'hooks/use-reducer-2',
        element: <UseReducer2 />
      },
      {
        path: 'hooks/use-ref-with-dom',
        element: <UseRefWithDom />
      },
      {
        path: 'hooks/use-ref',
        element: <UseRef />
      },
      {
        path: 'hooks/unified-use-state',
        element: <UnifiedUseState />
      },
      {
        path: '/third-party/react-router/react-router-hooks/:lastPath',
        element: <ReactRouterHooks />
      }
    ]
  }
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
