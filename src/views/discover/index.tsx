import type { FC } from 'react'
import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Discover: FC = () => {
  return (
    <div>
      {/* 这里是二级路由 一级路由(App)中使用了Suspense组件 当我点击某个二级路由的时候 整个二级路由都会刷新, 导致闪屏 所以这里再次使用Suspense包裹一下二级路由 作为二级路由的替代方案 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
