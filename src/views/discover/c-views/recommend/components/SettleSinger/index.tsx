import type { FC } from 'react'
import LayoutBetween from '@/components/LayoutBetween'
import { useAppSelector } from '@/hooks/app.ts'
import { getImageSize } from '@/utils/handleImgUrl.ts'
import { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { SettleWrapper } from './style.ts'

const SettleSinger: FC = () => {
  const { settleSingers } = useAppSelector(state => state.recommend, shallowEqual)
  return (
    <SettleWrapper>
      <LayoutBetween
        title="入驻歌手"
        morePath="/discover/artist"
        moreText="查看全部 &nbsp; &gt;"
      />
      <div className="singer-list">
        {settleSingers.map((item) => {
          return (
            <a href="#/href" key={item.id} className="item">
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join('') || item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SettleWrapper>
  )
}

export default memo(SettleSinger)
