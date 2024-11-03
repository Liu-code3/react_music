import type { FC, ReactNode } from 'react'
import { ItemWrapper } from '@/components/SectionItem/style.ts'
import { getImageSize } from '@/utils/handleImgUrl.ts'
import { memo } from 'react'
import {handlePlayCount} from "@/utils/handlePlayCount.ts";

interface IProps {
  children?: ReactNode
  info?: any
}
const SectionItem: FC<IProps> = (props) => {
  const { info } = props

  return (
    <ItemWrapper>
      <div className="cover-top">
        <img src={getImageSize(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {handlePlayCount(info.playCount)}
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
