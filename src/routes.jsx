import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeView } from "./pages/home/views/HomeView"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
