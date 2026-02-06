import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { homeLoader } from './pages/home/loaders/homeLoader';
import { HomeView } from "./pages/home/views/HomeView"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    loader: homeLoader
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
