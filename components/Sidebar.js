import styled from 'styled-components'
import { standard, retina, color } from '../public/screensizes'
import Link from 'next/link'

const SidebarContainer = styled.div`
  background-color: ${color.jctOrange};
  display: grid;
  grid-template-rows: 6% 1fr;
  position: sticky;
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
  padding-left: 3rem;
`

const SiteList = styled.ul`
  list-style: none;
  padding: 0 0 0 1rem;

  h2{
    color: #fff;
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }
  
  li a{
    text-decoration: none;
  }

  li a span:hover{
    border-left: 5px solid #fff;
    margin-left: -5px;
  }

  li a span{
    height: 6rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    font-size: 1.8rem;
    color: #fff;
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
          <Link href='../mammoth/university'>
            <a><span>University</span></a>
          </Link>
        </li>
        <li>
          <Link href='../mammoth/ceh'>
            <a><span>ceh</span></a>
          </Link>
        </li>
      </SiteList>
    </SiteListContainer>
  </SidebarContainer>
)

export default Sidebar