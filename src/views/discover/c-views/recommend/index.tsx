import type { FC } from 'react'
import { useAppDispatch } from '@/hooks/app.ts'
import { fetchRecommendDataAction } from '@/store/modules/recommend.ts'
import { memo, useEffect } from 'react'
import HotRecommend from './components/HotRecommend'
import NewAlbum from './components/NewAlbum'
import TopBanner from './components/TopBanner'
import { RecommendLeft, RecommendRight, RecommendSection } from './style.ts'

const Recommend: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
