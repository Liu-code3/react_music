import type { FC } from 'react'
import SectionHeader from '@/components/SectionHeader'
import SectionItem from '@/components/SectionItem'
import { useAppSelector } from '@/hooks/app.ts'
import { memo } from 'react'
import { RecommendWrapper } from './style.ts'

const HotRecommend: FC = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotRecommends } = useAppSelector(state => state.recommend)

  return (
    <RecommendWrapper>
      <SectionHeader
        title="热门推荐"
        keywords={keywords}
        morePath="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((item) => {
          return <SectionItem info={item} key={item.id}></SectionItem>
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
