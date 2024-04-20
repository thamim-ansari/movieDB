import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {SliderContainer, ImageContainer, SliderImage} from './styledComponent'

const HomeSlider = props => {
  const {images} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map(Image => (
          <ImageContainer key={Image.id}>
            <SliderImage src={Image.backdropImage} alt="Slide 1" />
          </ImageContainer>
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default HomeSlider
