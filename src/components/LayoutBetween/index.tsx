import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { LayoutBetweenWrapper } from './style.ts'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  morePath?: string
}

const LayoutBetween: FC<IProps> = (props) => {
  const { title = '', moreText, morePath } = props
  return (
    <LayoutBetweenWrapper>
      <h3 className="title">{title}</h3>
      <a href={morePath}>{moreText}</a>
    </LayoutBetweenWrapper>
  )
}

export default memo(LayoutBetween)
