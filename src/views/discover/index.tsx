import type { FC } from 'react'
import { discoverMenu } from '@/assets/data/local-data.ts'
import { memo, Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style.ts'

const Discover: FC = () => {
  return (
    <DiscoverWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
      {/* 这里是二级路由 一级路由(App)中使用了Suspense组件 当我点击某个二级路由的时候 整个二级路由都会刷新, 导致闪屏 所以这里再次使用Suspense包裹一下二级路由 作为二级路由的替代方案 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
