import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './styles/global.css';

import Root from './pages/root';
import ScratchPad1 from './pages/etc/scratch-pad1';
import ScratchPad2 from './pages/etc/scratch-pad2';
import ScratchPad3 from './pages/etc/scratch-pad3';
import Coins from './pages/etc/coins';
import InputCheckbox from './pages/tags/input-checkbox';
import UseCallbackWrongUsages from './pages/hooks/use-callback-wrong-usages';
import UseContextTest from './pages/hooks/use-context-test';
import UseMemoTest from './pages/hooks/use-memo-test';
import UseRefTest from './pages/hooks/use-ref-test';
import UnifiedUseState from './pages/hooks/unified-use-state';
import ReactRouterHooks from './pages/third-party/react-router/react-router-hooks';
import TestDayjs from './pages/third-party/dayjs/test-dayjs';
import Validation from './pages/third-party/react-hook-form/validation';
import PropsTest from './pages/props/props-test';
import CustomHooks from './pages/hooks/custom-hooks';
import ForwardRefTest from './pages/hooks/forward-ref-test';
import UseCallbackTest from './pages/hooks/use-callback-test';
import UseEffectTest from './pages/hooks/use-effect-test';
import UseReducerTest1 from './pages/hooks/use-reducer-test1';
import UseReducerTest2 from './pages/hooks/use-reducer-test2';
import UseRefWithDom from './pages/hooks/use-ref-with-dom';
import UseStateTest1 from './pages/hooks/use-state-test1';
import UseStateTest2 from './pages/hooks/use-state-test2';
import UseStateTest3 from './pages/hooks/use-state-test3';

function PropsWithRendering() {
  return null;
}

function TestDatePicker() {
  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'etc/scratch-pad1',
        element: <ScratchPad1 />
      },
      {
        path: 'etc/scratch-pad2',
        element: <ScratchPad2 />
      },
      {
        path: 'etc/scratch-pad3',
        element: <ScratchPad3 />
      },
      {
        path: 'etc/coins',
        element: <Coins />
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
        path: 'hooks/custom-hooks',
        element: <CustomHooks />
      },
      {
        path: 'hooks/forward-ref-test',
        element: <ForwardRefTest />
      },
      {
        path: 'hooks/use-callback-test',
        element: <UseCallbackTest />
      },
      {
        path: 'hooks/use-callback-wrong-usages',
        element: <UseCallbackWrongUsages />
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
      },
      {
        path: '/hooks/use-state-test1',
        element: <UseStateTest1 />
      },
      {
        path: '/hooks/use-state-test2',
        element: <UseStateTest2 />
      },
      {
        path: '/hooks/use-state-test3',
        element: <UseStateTest3 />
      }
    ]
  }
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
