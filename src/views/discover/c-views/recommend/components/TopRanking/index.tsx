import type { FC } from 'react'
import RankingItem from '@/components/RankingItem'
import SectionHeader from '@/components/SectionHeader'
import { useAppSelector } from '@/hooks/app.ts'
import { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { RankingWrapper } from './style.ts'

const TopRanking: FC = () => {
  const { rankings } = useAppSelector(state => state.recommend, shallowEqual)

  return (
    <RankingWrapper>
      <SectionHeader title="榜单" morePath="/discover/ranking" />
      <div className="rankings">
        {rankings.map((item) => {
          return <RankingItem itemData={item} key={item.id} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
