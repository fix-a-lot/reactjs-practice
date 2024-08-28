import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './styles/global.css';

import Root from './pages/root';
import UseRefWithDom from './pages/hooks/use-ref-with-dom';
import UseRefTest from './pages/hooks/use-ref-test';
import Coins from './pages/etc/coins';
import UseContextTest from './pages/hooks/use-context-test';
import ForwardRefTest from './pages/hooks/forward-ref-test';
import InputCheckbox from './pages/tags/input-checkbox';
import PropsTest from './pages/props/props-test';
import PropsWithRendering from './pages/props/props-with-rendering';
import UseEffectTest from './pages/hooks/use-effect-test';
import CustomHooks from './pages/hooks/custom-hooks';
import UseMemoTest from './pages/hooks/use-memo-test';
import UnifiedUseState from './pages/hooks/unified-use-state';
import UseReducerTest2 from './pages/hooks/use-reducer-test2';
import UseReducerTest1 from './pages/hooks/use-reducer-test1';
import ScratchPad from './pages/etc/scratch-pad';
import UseCallbackTest from './pages/hooks/use-callback-test';
import ReactRouterHooks from './pages/third-party/react-router/react-router-hooks';
import TestDayjs from './pages/third-party/dayjs/test-dayjs';
import TestDatePicker from './pages/third-party/mui/test-x-date-picker';
import Validation from './pages/third-party/react-hook-form/validation';

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
        path: 'hooks/forward-ref-test',
        element: <ForwardRefTest />
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
        path: 'props/props-test',
        element: <PropsTest />
      },
      {
        path: 'etc/scratch-pad',
        element: <ScratchPad />
      },
      {
        path: 'hooks/use-callback-test',
        element: <UseCallbackTest />
      },
      {
        path: 'hooks/use-context-test',
        element: <UseContextTest />
      },
      {
        path: 'hooks/use-effect-test',
        element: <UseEffectTest />
      },
      {
        path: 'hooks/use-memo-test',
        element: <UseMemoTest />
      },
      {
        path: 'hooks/use-reducer-test-1',
        element: <UseReducerTest1 />
      },
      {
        path: 'hooks/use-reducer-test-2',
        element: <UseReducerTest2 />
      },
      {
        path: 'hooks/use-ref-with-dom',
        element: <UseRefWithDom />
      },
      {
        path: 'hooks/use-ref-test',
        element: <UseRefTest />
      },
      {
        path: 'hooks/unified-use-state',
        element: <UnifiedUseState />
      },
      {
        path: '/third-party/react-router/react-router-hooks/:lastPath',
        element: <ReactRouterHooks />
      },
      {
        path: '/third-party/dayjs/dayjs',
        element: <TestDayjs />
      },
      {
        path: 'third-party/mui-x/date-picker',
        element: <TestDatePicker />
      },
      {
        path: 'third-party/react-hook-form/validation',
        element: <Validation />
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
