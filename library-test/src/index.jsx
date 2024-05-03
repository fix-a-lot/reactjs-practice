import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/global.css';

import Root from './pages/root';
import TestDayjs from 'pages/dayjs';
import TestMuiDatePicker from 'pages/mui-date-picker';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/dayjs',
        element: <TestDayjs />
      },
      {
        path: '/mui-date-picker',
        element: <TestMuiDatePicker />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
