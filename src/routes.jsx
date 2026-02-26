import { routesPath } from './configs/global'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { homeLoader } from './pages/home/loaders/homeLoader'
import { HomeView } from './pages/home/views/HomeView'
import CelebrePage from './components/CelebrePage/CelebrePage'
import RealStatesView from './pages/realStates/views/RealStatesView'
import { realStatesLoader } from './pages/realStates/loaders/realStatesLoader'
import { RealStateDetailsPage } from './pages/realStateDetails/views/RealStateDetailsPage'
import { realStateDetailsLoader } from './pages/realStateDetails/loaders/realStateDetailsLoader'

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
      },
      {
        path: `${routesPath['realStateDetails']}/:id`,
        element: <RealStateDetailsPage />,
        loader: realStateDetailsLoader
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
