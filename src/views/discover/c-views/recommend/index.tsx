import type { FC } from 'react'
import { useAppDispatch } from '@/hooks/app.ts'
import { fetchRankingDataAction, fetchRecommendDataAction } from '@/store/modules/recommend.ts'
import { memo, useEffect } from 'react'
import HotRecommend from './components/HotRecommend'
import NewAlbum from './components/NewAlbum'
import SettleSinger from './components/SettleSinger'
import TopBanner from './components/TopBanner'
import TopRanking from './components/TopRanking'
import UserLogin from './components/UserLogin'
import { RecommendLeft, RecommendRight, RecommendSection } from './style.ts'

const Recommend: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
        </RecommendRight>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
