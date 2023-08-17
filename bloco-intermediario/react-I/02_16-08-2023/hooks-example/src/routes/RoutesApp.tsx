import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/error',
    element: <h1>Error</h1>
  }
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
