import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

import MobileCarousel from '../components/MobileCarousel'

const MobileMainContainer = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
`

const MobileCompanyContainer = styled.div`
  margin: 5.5rem 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 3rem;
`

const MobileCompanyName = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${color.jctWhite};
`


const MobileSiteName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #FF7E26;
`


const MobileLayout = props => (
  <>
    <MobileMainContainer>
      <MobileCompanyContainer>
        <MobileCompanyName>{props.company_name}</MobileCompanyName>
        <MobileSiteName>{props.site_name}</MobileSiteName>
      </MobileCompanyContainer>
      <MobileCarousel>
        {props.children}
      </MobileCarousel>
    </MobileMainContainer>
     
    <style jsx global>{`
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
    `}</style>

  </>
)

export default MobileLayout