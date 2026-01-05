import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from '../Layout';
import Aura from './pages/Aura';
import Projets from './pages/Projets';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';


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
      {
        path: 'projets',
        element: <Projets />
      },
      {
        path: 'expertise',
        element: <Expertise />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
    errorElement: <NotFound />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
