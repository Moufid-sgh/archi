import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate, useLocation } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from '../Layout';
import Aura from './pages/Aura';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'aura',
        element: <Aura />
      },
      // {
      //   path: 'recipe/:id',
      //   element: <Recipe />
      // },
      // {
      //   path: 'about_us',
      //   element: <AboutUs />
      // },
      // {
      //   path: 'terms',
      //   element: <Terms />
      // },
    ],
    errorElement: <NotFound />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
