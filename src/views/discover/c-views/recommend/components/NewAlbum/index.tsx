import type { ElementRef, FC, ReactNode } from 'react'
import AlbumItem from '@/components/AlbumItem'
import SectionHeader from '@/components/SectionHeader'
import { useAppSelector } from '@/hooks/app.ts'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/components/NewAlbum/style.ts'
import { Carousel } from 'antd'
import { memo, useRef } from 'react'

interface IProps {
  children?: ReactNode
}
const NewAlbum: FC<IProps> = () => {
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector(state => state.recommend)
  return (
    <AlbumWrapper>
      <SectionHeader
        title="新碟上架"
        morePath="/discover/album"
      />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={() => albumRef.current?.prev()}
        >
        </div>
        <div className="album">
          <Carousel ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums?.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumItem key={item.id} itemData={item}></AlbumItem>
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => albumRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
