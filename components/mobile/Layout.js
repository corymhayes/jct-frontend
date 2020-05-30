import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import { color } from '../../public/screensizes'
import { useState } from 'react'

const MobileMainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 7rem 1fr;
`

const MobileCompanyContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  background-color: ${color.jctDarkGray};
  place-items: stretch;
`

const Menu = styled.div`
  place-self: center;
  img{
    width: 24px;
  }
`

const NameDateTimeContainer = styled.div`
  place-self: center;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const MobileSiteName = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${color.jctWhite};
`

const DateTime = styled.h3`
  color: ${color.jctWhite};
  font-size: 1.4rem;
  font-weight: 400;
`

const MobileCarouselContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-top: 4rem;
`

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;

  img{
    height: 75%;
  }
`

const SiteNavContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 3rem;
  padding-top: 1rem;
  
  h1{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
`

const SiteLinks = styled.nav`
  ul{
    list-style: none;
    margin-top: 1.5rem;
  }

  li{
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  li:hover{
    background-color: ${color.jctOrange};
  }

  a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
`


const MobileLayout = props => {
  const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false)
  const [isAlarmMenuOpen, setIsAlarmMenuOpen] = useState(false)
  
  return(
    <Sidebar
      sidebar={
        <>
          <CompanyContainer>
            <img src={`../static/${props.company}-logo.png`} />
          </CompanyContainer>
          <SiteNavContainer>
            <h1>Sites</h1>
            <SiteLinks>
              <ul>
                {props.sites}
              </ul>
            </SiteLinks>
          </SiteNavContainer>
        </>
      }
      open={isSiteMenuOpen}
      onSetOpen={setIsSiteMenuOpen}
      styles={{
        sidebar: {
          width: '30rem',
          backgroundColor: `${color.jctDarkGray}`,
          display: 'grid',
          gridTemplateRows: '12.5rem 1fr'
        },
        overlay: {
          backgroundColor: 'rgba(255,255,255,0)'
        }
      }}
    >
      {/* <Sidebar
      sidebar={
        <>
          <CompanyContainer>
            <img src={`../static/${props.company}-logo.png`} />
          </CompanyContainer>
          <SiteNavContainer>
            <h1>Sites</h1>
            <SiteLinks>
              <ul>
                {props.sites}
              </ul>
            </SiteLinks>
          </SiteNavContainer>
        </>
      }
      open={isAlarmMenuOpen}
      onSetOpen={setIsAlarmMenuOpen}
      pullRight={true}
      styles={{
        sidebar: {
          width: '30rem',
          backgroundColor: `${color.jctDarkGray}`,
          display: 'grid',
          gridTemplateRows: '12.5rem 1fr'
        },
        overlay: {
          backgroundColor: 'rgba(255,255,255,0)'
        }
      }}
      > */}
        <MobileMainContainer>
            <MobileCompanyContainer>
              <Menu onClick={() => setIsSiteMenuOpen(true)}>
                <img src='../static/menu-icon.svg' />
              </Menu>
              <NameDateTimeContainer>
                <MobileSiteName>{props.sitename}</MobileSiteName>
                <DateTime>{props.date} - {props.time}</DateTime>
              </NameDateTimeContainer>
              {/* <Menu onClick={() => setIsAlarmMenuOpen(true)}>
                <img src='../static/alarm-icon.png' />
              </Menu> */}
            </MobileCompanyContainer>
            <MobileCarouselContainer>
              {props.children}
            </MobileCarouselContainer>
        </MobileMainContainer>
      {/* </Sidebar> */}
    </Sidebar>
  )
}


export default MobileLayout