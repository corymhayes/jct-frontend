import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

import MobileCarousel from '../components/MobileCarousel'

const MobileMainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 85%;
`

const MobileCompanyContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 4rem;
`

const MobileCompanyName = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${color.jctWhite};
`

const MobileSiteName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${color.jctOrange};
`

const DateTime = styled.h3`
  color: rgba(255,255,255,.5);
  font-size: 1.75rem;
  font-weight: 400;
`

const MobileCarouselContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`


const MobileLayout = props => (
  <>
    <MobileMainContainer>
      <MobileCompanyContainer>
        <MobileCompanyName>{props.company_name}</MobileCompanyName>
        <MobileSiteName>{props.site_name}</MobileSiteName>
        <DateTime>{props.date} - {props.time}</DateTime>
      </MobileCompanyContainer>
      <MobileCarouselContainer>
        {props.children}
      </MobileCarouselContainer>
    </MobileMainContainer>
     
    {/* <style jsx global>{`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        font-weight: 100;
      }

      body{
        background-color: #292929;
      }

      #__next{
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }
    `}</style> */}

  </>
)

export default MobileLayout