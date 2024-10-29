import type { FC, ReactNode } from 'react'
import HeaderTitle from '@/assets/data/header-titles.json'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style.ts'

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
          <i className="icon sprite_01"></i>
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
            {HeaderTitle.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
          />
          <span className="center">创作者中心</span>
          <span>登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
