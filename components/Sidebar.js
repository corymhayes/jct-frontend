import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'

const SidebarContainer = styled.div`
  height: 100vh;
  width: 30rem;
  background-color: ${color.jctOrange};
  display: grid;
  grid-template-rows: 6% 1fr;
  position: fixed;
`

const CompanyNameContainer = styled.div`
  background-color: #ff7e26;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CompanyName = styled.h1`
  color: #fff;
  font-size: 3rem;
`

const SiteListContainer = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
`

const SiteList = styled.ul`
  list-style: none;
  padding: 0 0 0 1rem;

  h2{
    color: #fff;
    font-size: 2.3rem;
  }
  
  li a{
    text-decoration: none;
  }

  li a span{
    height: 6rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.8rem;
    color: #fff;
  }

  li a span:hover{
    background-color: rgba(255,255,255,.125);
  }
`



const Sidebar = props => (
  <SidebarContainer>
    <CompanyNameContainer>
      <CompanyName>{props.companyName}</CompanyName>
    </CompanyNameContainer>
    <SiteListContainer>
      <SiteList>
        <h2>Sites</h2>
        <li>
          <a href="#">
            <span>{props.siteName}</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>{props.siteName}</span>
          </a>
        </li>
      </SiteList>
    </SiteListContainer>
  </SidebarContainer>
)

export default Sidebar