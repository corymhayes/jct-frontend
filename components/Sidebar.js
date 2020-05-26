import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

const SidebarContainer = styled.div`
  width: 30rem;
  background-color: ${color.jctDarkGray};
  display: grid;
  grid-template-rows: 12.5rem 1fr;
  position: sticky;
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

const Sidebar = (props) => {
  return(
    <SidebarContainer>
      <CompanyContainer>
        <img src={`/static/${props.company}-logo.png`} />
      </CompanyContainer>
      <SiteNavContainer>
        <h1>Sites</h1>
        <SiteLinks>
          <ul>
            {props.sites}
          </ul>
        </SiteLinks>
      </SiteNavContainer>
    </SidebarContainer>
  )
}


export default Sidebar