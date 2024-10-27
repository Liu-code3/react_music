import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'

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

/**
 * 相对路径，子路由会相对于父路由自动拼接
 * {
 *   path: 'discover',
 *   element: <Discover />,
 *   children: [
 *   {
 *     path: 'recommend',
 *     element: <Recommend />
 *   }
 *   ]
 * }
 *
 * 绝对路径，每个路由的path都是完整路径
 * {
 *     path: '/discover',
 *     element: <Discover />,
 *     children: [
 *       {
 *         path: '/discover/recommend',
 *         element: <Recommend />
 *       }
 *     ]
 * }
 */

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: 'discover',
    element: <Discover />,
    children: [
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'songs',
        element: <Songs />
      },
      {
        path: 'djradio',
        element: <Djradio />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'album',
        element: <Album />
      },
    ]
  },
  {
    path: 'mine',
    element: <Mine />
  },
  {
    path: 'focus',
    element: <Focus />
  },
  {
    path: 'download',
    element: <DownLoad />
  }
]

const router = createHashRouter(routes)

function Routes() {
  return <RouterProvider router={router}></RouterProvider>
}

export default Routes
