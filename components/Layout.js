import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-flow: column;

  @media ${standard.desktop} {
    width: 50%;
  }
  
  @media ${retina.laptop} {
    width: 75%;
  }
`

const CompanyContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 1rem;
`

const CompanyName = styled.h1`
  @media ${standard.desktop} {
    font-size: 6rem;
    font-weight: 600;
    color: #efefef;
  }
  
  @media ${retina.laptop} {
    font-size: 4rem;
    font-weight: 600;
    color: #efefef;
  }
`


const SiteName = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #FF7E26;

  @media ${standard.desktop} {
    font-size: 4rem;
    font-weight: 600;
    color: #FF7E26;
  }
  
  @media ${retina.laptop} {
    font-size: 2.75rem;
    font-weight: 600;
    color: #FF7E26;
  }
`

const SiteDetailsContainer = styled.div`
  background-color: ${color.jctWhite};
  height: auto;
  padding: 9rem 18rem 9rem 0;
  display: grid;
  overflow: scroll;
  
  @media ${standard.desktop} {
    column-gap: 12rem;
    grid: auto-flow / repeat(4, 25%);
    padding: 12rem 48rem 0 12rem;

  }
  
  @media ${retina.laptop} {
    column-gap: 10rem;
    grid: auto-flow / repeat(3, 33%);
    padding: 10rem 30rem 0rem 10rem;
  }
`

const Layout = props => (
  <>

    <MainContainer>
      <CompanyContainer>
        <CompanyName>{props.company_name}</CompanyName>
        <SiteName>{props.site_name}</SiteName>
      </CompanyContainer>
      <SiteDetailsContainer>
        { props.children }
      </SiteDetailsContainer>
    </MainContainer>
    
    <style jsx global>{`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
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

export default Layout