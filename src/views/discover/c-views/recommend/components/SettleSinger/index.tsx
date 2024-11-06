import type { FC } from 'react'
import LayoutBetween from '@/components/LayoutBetween'
import { memo } from 'react'
import { SettleWrapper } from './style.ts'

const SettleSinger: FC = () => {
  return (
    <SettleWrapper>
      <LayoutBetween
        title="入驻歌手"
        morePath="/discover/artist"
        moreText="查看全部 &nbsp; &gt;"
      />
    </SettleWrapper>
  )
}

export default memo(SettleSinger)
