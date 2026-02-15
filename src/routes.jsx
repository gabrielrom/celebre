import { routesPath } from './configs/global'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { homeLoader } from './pages/home/loaders/homeLoader'
import { HomeView } from './pages/home/views/HomeView'
import CelebrePage from './components/CelebrePage/CelebrePage'
import RealStatesView from './pages/realStates/views/RealStatesView'
import { realStatesLoader } from './pages/realStates/loaders/realStatesLoader'

const router = createBrowserRouter([
  {
    path: routesPath['index'],
    element: <CelebrePage />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: homeLoader
      },
      {
        path: routesPath['realStates'],
        element: <RealStatesView />,
        loader: realStatesLoader
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
