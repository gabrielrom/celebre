import { useHome } from '../controllers/useHome'

export function HomeView() {
  useHome()

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
