import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);