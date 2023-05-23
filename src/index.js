import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/partner-with-us",
  //   element: <Partner/>, 
  // },
  // {
  //   path: "/registration-form",
  //   element: <Registration/>
  // },
  // {
  //   path: "/terms-and-conditions",
  //   element: <Terms/>
  // },
  // {
  //   path: "/privacy-policies",
  //   element: <Policies/>
  // },
  // {
  //   path: "*",
  //   element: <Error />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);