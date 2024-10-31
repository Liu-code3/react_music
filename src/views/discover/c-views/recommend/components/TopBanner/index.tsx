import type { ElementRef, FC } from 'react'
import { useAppSelector } from '@/hooks/app.ts'
import { Carousel } from 'antd'
import classnames from 'classnames'
import { memo, useCallback, useRef, useState } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style.ts'

const TopBanner: FC = () => {
  /** 定义组件内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const divRef = useRef(null)

  const { banners } = useAppSelector(state => state.recommend)

  const bannerChange = useCallback((_: number, to: number) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])

  const handlePrev = () => {
    bannerRef.current?.prev()
  }
  const handleNext = () => {
    bannerRef.current?.next()
  }

  /** 高斯模糊处理的背景图片 */
  const bgImage
      = banners[currentIndex]
      && `${banners[currentIndex].imageUrl}?imageView&blur=40x20`

  return (
    // $bgImage作为自定义属性传递到了 DOM 元素 使用 "transient props" 方法 这样它不会被传递到实际的 DOM 元素上。
    <BannerWrapper $bgImage={bgImage}>
      <div className="banner wrap-v2" ref={divRef}>
        <BannerLeft>
          <Carousel
            dots={false}
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            { banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li
                  key={item.imageUrl}
                  className={classnames('item', {
                    active: currentIndex === index
                  })}
                >
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <div className="desc">
            <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
          </div>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrev}></button>
          <button className="btn right" onClick={handleNext}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
