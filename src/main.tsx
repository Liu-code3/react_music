import App from '@/App.tsx'
import theme from '@/assets/theme'
import store from '@/store'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './assets/css/base.css'
import 'virtual:uno.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
