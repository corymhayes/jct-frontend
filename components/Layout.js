import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'
import Sidebar from './Sidebar'

const MainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid; 
  grid-template-columns: 25% 1fr;
`

const ContentContainer = styled.div`
  display: grid;
  
  @media ${standard.tabletP}{
    width: 80%;
    grid-template-rows: 12% 1fr;
  }
  
  @media ${standard.tabletL}{
    width: 90%;
    grid-template-rows: 15% 85%;
  }

  @media ${standard.laptopS} {
    width: 65%;
    grid-template-rows: 12% 90%;
  }

  @media ${standard.desktop} {
    height: 60vh;
    max-width: 30%; 
    grid-template-rows: 12% 1fr;
  }
`

const CompanyContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 1rem;
`

const CompanyName = styled.h1`
  font-weight: 600;
  color: #efefef;

  @media ${standard.tablet} {
    font-size: 3rem;
  }

  @media ${standard.desktop} {
    font-size: 5rem;
  }
  
  @media ${retina.laptopM} {
    font-size: 4rem;
  }
`

const SiteName = styled.h2`
  font-weight: 600;
  color: #FF7E26;
  margin-bottom: .5rem;

  @media ${standard.tablet} {
    font-size: 2rem;
  }
  
  @media ${standard.desktop} {
    font-size: 3rem;
  }
  
  @media ${retina.laptopM} {
    font-size: 2.75rem;
  }
`

const DateTime = styled.h3`
  color: rgba(255,255,255,.5);
  font-size: 1.75rem;
  font-weight: 400;
  margin-left: .25rem;
`

const SiteDetailsContainer = styled.div`
  background-color: ${color.jctWhite};
  height: auto;
  padding: 9rem 18rem 9rem 0;
  overflow: scroll;
  display: grid;
  
  @media ${standard.tabletP}{
    padding: 3rem 6rem 3rem 3rem;
    grid: auto-flow / repeat(2, 50%);
    grid-gap: 3rem 3rem;
  }
  
  @media ${standard.tabletL}{
    padding: 4rem 13rem 4rem 4rem;
    grid: auto-flow / repeat(3, 33%);
    grid-gap: 5rem 5rem;
  }
  
  @media ${standard.desktop} {
    padding: 6rem 20rem 6rem 6rem;
    grid: auto-flow / repeat(3, 33%);
    grid-gap: 0rem 7rem;

  }
  
  @media ${retina.laptopM} {
    padding: 5rem 19rem 0 5rem;
    grid: auto-flow / repeat(3, 33%);
    grid-gap: 1rem 7rem;
  }
`

const Layout = props => (
  <>
    <Sidebar companyName="Mammoth" />
    <ContentContainer>
      <CompanyContainer>
        <CompanyName>{props.company_name}</CompanyName>
        <SiteName>{props.site_name}</SiteName>
        <DateTime>{props.date} - {props.time}</DateTime>
      </CompanyContainer>
      <SiteDetailsContainer>
        { props.children }
      </SiteDetailsContainer>
    </ContentContainer>
  </>
)

export default Layout