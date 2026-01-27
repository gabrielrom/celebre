import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'
import { Routes } from './routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
