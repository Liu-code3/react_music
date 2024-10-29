import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {
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
} from './lazyComponent.tsx'

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

export default routes
