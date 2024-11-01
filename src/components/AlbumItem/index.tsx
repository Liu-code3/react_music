import type { FC, ReactNode } from 'react'
import { getImageSize } from '@/utils/handleImgUrl.ts'
import { memo } from 'react'
import { ItemWrapper } from './style.ts'

interface IProps {
  children?: ReactNode
  itemData: any
}
const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className="album-image">
        <img src={getImageSize(itemData.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </ItemWrapper>
  )
}

export default memo(AlbumItem)
