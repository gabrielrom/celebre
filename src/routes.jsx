import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { homeLoader } from './pages/home/loaders/homeLoader'
import { HomeView } from './pages/home/views/HomeView'
import CelebrePage from './components/CelebrePage/CelebrePage'
import RealStatesView from './pages/realStates/views/RealStatesView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CelebrePage />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: homeLoader
      },
      {
        path: '/imoveis',
        element: <RealStatesView />,
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
