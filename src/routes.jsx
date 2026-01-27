import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeView } from './views/HomeView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
