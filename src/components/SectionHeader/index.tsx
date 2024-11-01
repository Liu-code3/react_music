import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style.ts'

interface IProps {
  children?: ReactNode
  title: string
  keywords?: string[]
  morePath: string
}
const SectionHeader: FC<IProps> = (props) => {
  const { title = '', keywords = [], morePath = '' } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={morePath}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

export default memo(SectionHeader)
