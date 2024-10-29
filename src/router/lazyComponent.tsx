import { lazy } from 'react'

/**
 * Fast Refresh机制
 * 分离路由配置和组件
 * 你可以通过将路由配置和组件懒加载逻辑分开，即：
 *
 * 一个文件只导出组件：用于解决 Fast Refresh 的警告问题。
 * 路由配置单独管理：确保路由配置文件只处理路由映射，而不是同时处理懒加载逻辑。
 *
 * 因为 routes.tsx 现在只导出路由映射对象，不再混合非组件内容
 */

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const DownLoad = lazy(() => import('@/views/download'))

const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))

export {
  Album,
  Artist,
  Discover,
  Djradio,
  DownLoad,
  Focus,
  Mine,
  Ranking,
  Recommend,
  Songs
}
