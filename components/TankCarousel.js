import Carousel from 'nuka-carousel'

const MobileCarousel = props => (
  <Carousel
    cellAlign={ 'left' }
    cellSpacing={ 25 }
    slideWidth={ '110px' }
    scrollMode={'page'}
    disableEdgeSwiping={true}
    withoutControls={true}
    slidesToShow={3}
  >
    { props.children }
  </Carousel>
)

export default MobileCarousel