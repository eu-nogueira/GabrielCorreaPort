import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import SobreMim from './pages/SobreMim';
import Portfolio from './pages/Portfolio';
import RetratoPage from './pages/RetratoPage';
import LifestylePage from './pages/LifestylePage';

const router = createBrowserRouter([
  {
    path: "sobremim",
    element: <SobreMim />
  },

  {
    path: "/",
    element: <Portfolio />
  },

  {
    path: "retratopage",
    element: <RetratoPage/>
  },

  {
    path: "lifestylepage",
    element: <LifestylePage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
