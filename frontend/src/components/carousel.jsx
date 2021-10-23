import './carousel.scss'

function Carousel({ children }) {
  return (
    <div className="carousel">
      <div className="carousel__button carousel__button--previous" />
      <div className="carousel__button carousel__button--next" />
      <div className="carousel__slides">{children}</div>
    </div>
  )
}

export default Carousel
