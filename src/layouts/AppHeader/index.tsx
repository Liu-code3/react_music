import type { FC, ReactNode } from 'react'
import HeaderTitle from '@/assets/data/header-titles.json'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderWrapper } from './style.ts'

interface TitleType {
  type: string
  title: string
  link: string
}

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: TitleType) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
        </NavLink>
      )
    }
    else if (item.type === 'link') {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            { HeaderTitle.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            }) }
          </div>
        </HeaderLeft>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
