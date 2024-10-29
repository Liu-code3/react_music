import store from '@/store'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './assets/css/base.css'
import 'virtual:uno.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
