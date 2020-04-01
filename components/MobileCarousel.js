import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { standard, retina, color } from '../public/screensizes'

const MobileCarousel = props => (
  <Carousel
    cellAlign={ 'center' }
    slidesToShow={ 3 }
    cellSpacing={ 20 }
    slideWidth={ '300px' }
    withoutControls
  >
    { props.children }
  </Carousel>
)

export default MobileCarousel