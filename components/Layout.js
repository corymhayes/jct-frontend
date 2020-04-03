import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-flow: column;

  
  @media ${standard.tablet}{
    width: 90%;
  }

  @media ${standard.desktop} {
    width: 50%;
  }
  
  
  @media ${retina.laptop} {
    width: 75%;
  }

`

const CompanyContainer = styled.div`
  margin: 2rem 0 2rem 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;

  @media ${standard.tablet}{
    margin: 4rem 0 4rem 1rem;
  }
  
  @media ${standard.desktop}{
    margin: 5rem 0 5rem 1rem;
  }
  
  @media ${retina.laptop}{
    margin: 3rem 0 3rem 1rem;
  }
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
  
  @media ${retina.laptop} {
    font-size: 4rem;
  }
`


const SiteName = styled.h2`
  font-weight: 600;
  color: #FF7E26;

  @media ${standard.tablet} {
    font-size: 2rem;
  }
  
  @media ${standard.desktop} {
    font-size: 3rem;
  }
  
  @media ${retina.laptop} {
    font-size: 2.75rem;
  }
`

const SiteDetailsContainer = styled.div`
  background-color: ${color.jctWhite};
  height: auto;
  padding: 9rem 18rem 9rem 0;
  overflow: scroll;
  display: grid;
  
  @media ${standard.tablet}{
    padding: 6rem 12rem 6rem 6rem;
    grid: auto-flow / repeat(2, 50%);
    grid-gap: 4rem 6rem;
  }
  
  @media ${standard.desktop} {
    padding: 6rem 27rem 6rem 6rem;
    grid: auto-flow / repeat(4, 25%);
    grid-gap: 10rem 7rem;

  }
  
  @media ${retina.laptop} {
    padding: 6rem 20rem 0 6rem;
    grid: auto-flow / repeat(3, 33%);
    grid-gap: 8rem 7rem;
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