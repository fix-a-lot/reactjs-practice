import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/root';
import UseRefWithDom from './pages/use-ref-with-dom';
import UseRef from './pages/use-ref';
import Coins from './pages/coins';
import UseContext from './pages/use-context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'use-ref-with-dom',
        element: <UseRefWithDom />
      },
      {
        path: 'use-ref',
        element: <UseRef />
      },
      {
        path: 'coins',
        element: <Coins />
      },
      {
        path: 'use-context',
        element: <UseContext />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
