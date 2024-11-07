import type { FC } from 'react'
import { hotRadios } from '@/assets/data/local-data.ts'
import LayoutBetween from '@/components/LayoutBetween'
import { memo } from 'react'
import { AnchorWrapper } from './style.ts'

const HotAnchor: FC = () => {
  return (
    <AnchorWrapper>
      <LayoutBetween title="热门主题" morePath="/discover/djradio" />
      <div className="anchor-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="#/discover/djradio" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
