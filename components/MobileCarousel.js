import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { standard, retina, color } from '../public/screensizes'

const MobileCarousel = props => (
  <Carousel
    cellAlign={ 'center' }
    cellSpacing={ 15 }
    slideWidth={ '325px' }
    withoutControls
  >
    { props.children }
  </Carousel>
)

export default MobileCarousel

const StyledCarousel = styled(Carousel)`
  background-color: blue;
`