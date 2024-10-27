import Routes from '@/router'
import { Suspense } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div></div>
      {/*  只包裹路由组件 fallback不给值的话 就不会看见界面闪烁 */}
      <Suspense fallback="">
        <div><Routes /></div>
      </Suspense>
    </div>
  )
}

export default App
