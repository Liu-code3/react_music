import { useAppDispatch } from '@/hooks/app.ts'
import AppHeader from '@/layouts/AppHeader'
import routes from '@/router'
import { fetchCurrentSongDataAction } from '@/store/modules/player.ts'
import AppPlayerBar from '@/views/player/app-player-bar'
import { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  // 请求默认歌曲信息
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongDataAction(1842025914))
  }, [])

  return (
    <div className="App">
      <AppHeader></AppHeader>
      {/*  只包裹路由组件 fallback不给值的话 就不会看见界面闪烁 */}
      <Suspense fallback="">
        <div className="main">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppPlayerBar />
    </div>
  )
}

export default App
