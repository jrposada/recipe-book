import useResize from 'hooks/useResize'
import {
  Children,
  createRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'

import './carousel.scss'

function Carousel({ children }: PropsWithChildren<{}>) {
  const containerRef = createRef<HTMLDivElement>()
  const [width, setWidth] = useState(0)
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState(0)

  const next = useCallback(() => {
    const nextIndex = index + 1
    setIndex(nextIndex >= Children.toArray(children).length ? 0 : nextIndex)
  }, [children, index])

  const previous = useCallback(() => {
    const nextIndex = index - 1
    setIndex(nextIndex < 0 ? Children.toArray(children).length - 1 : nextIndex)
  }, [children, index])

  // Update width
  const updateWidth = useCallback(() => {
    setWidth(containerRef.current?.getBoundingClientRect().width ?? 0)
  }, [containerRef])
  useResize(updateWidth)

  // Update position
  useEffect(() => {
    setPosition(index * width)
  }, [index, width])

  return (
    <div className="carousel" ref={containerRef}>
      <div
        className="carousel__slides"
        style={{ transform: `translateX(${-position}px)` }}
      >
        {children}
      </div>
      <div
        className="carousel__button carousel__button--previous"
        onClick={previous}
      />
      <div className="carousel__button carousel__button--next" onClick={next} />
    </div>
  )
}

export default Carousel
