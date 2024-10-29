import AppHeader from '@/layouts/AppHeader'
import routes from '@/router'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      {/*  只包裹路由组件 fallback不给值的话 就不会看见界面闪烁 */}
      <Suspense fallback="">
        <div className="main">
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  )
}

export default App
