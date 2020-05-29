import styled from 'styled-components'
import { color } from '../../public/screensizes'
import Sidebar from './Sidebar'


const MainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: row;
`

const SiteDetailsContainer = styled.div`
  padding-left: 7rem;
  overflow: scroll;
  display: grid;
  grid-template-rows: 20rem 1fr;
  width: 100%;
`

const SiteNameTime = styled.div`
  height: 15rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const SiteName = styled.h2`
  font-weight: 600;
  color: ${color.jctDarkGray};
  margin-bottom: .5rem;
  font-size: 36px;
  text-transform: uppercase;
`

const DateTime = styled.h3`
  color: ${color.jctDarkGray};
  font-size: 1.75rem;
  font-weight: 400;
  margin-left: .25rem;
`

const SiteDetails = styled.div`

`


const Layout = props => {
  return(
  <MainContainer>
    <Sidebar company={props.company} sites={props.sites} />
    <SiteDetailsContainer>
      <SiteNameTime>
        <SiteName>{props.sitename}</SiteName>
        <DateTime>{props.date} - {props.time}</DateTime>
      </SiteNameTime>
      <SiteDetails>
        { props.children }
      </SiteDetails>
    </SiteDetailsContainer>
  </MainContainer>
  )
}

export default Layout