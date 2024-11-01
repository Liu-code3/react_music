import type { FC, ReactNode } from 'react'
import { ItemWrapper } from '@/components/SectionItem/style.ts'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
  info?: any
}
const SectionItem: FC<IProps> = (props) => {
  const { info } = props

  return (
    <ItemWrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {info.playCount}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </ItemWrapper>
  )
}

export default memo(SectionItem)
