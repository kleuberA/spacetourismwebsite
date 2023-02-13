import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.css';
import './App.css'
import Home from './Pages/Home';
import Destination from './Pages/Destination';
import Destinations from './components/Destinations';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
    children: [
      {
        path: "/destination/",
        element: <Destinations />,
      },
      {
        path: "/destination/mars",
        element: <Destinations />,
      },
      {
        path: "/destination/europa",
        element: <Destinations />,
      },
      {
        path: "/destination/titan",
        element: <Destinations />,
      },
    ],
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
