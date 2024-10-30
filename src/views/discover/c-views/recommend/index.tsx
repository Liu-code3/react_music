import type { FC } from 'react'
import { useAppDispatch } from '@/hooks/app.ts'
import { fetchRecommendDataAction } from '@/store/modules/recommend.ts'
import TopBanner from '@/views/discover/c-views/recommend/components/TopBanner'
import { memo, useEffect } from 'react'

const Recommend: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
