import type { FC, ReactNode } from 'react'
import { changeCurrentSongAction } from '@/store/modules/player.ts'
import { getImageSize } from '@/utils/handleImgUrl.ts'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ItemWrapper } from './style.ts'

interface IProps {
  children?: ReactNode
  itemData: any
}

const RankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData || {}

  const dispatch = useDispatch()
  function handlePlayClick(id: number) {
    dispatch(changeCurrentSongAction(id))
  }

  return (
    <ItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="image_cover"></a>
        </div>
        <div className="info">
          <a href="">{itemData.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name">{item.name}</span>
                <div className="operate show">
                  <button className="btn sprite_02 play" onClick={() => handlePlayClick(item.id)}></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </ItemWrapper>
  )
}

export default memo(RankingItem)
