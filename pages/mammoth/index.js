import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { color } from '../../public/screensizes'

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  width: 100vw;
  height: 100vh;
`

const LogoSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  width: 100%;

  img{
    width: 50%;
  }
`

const LoginSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-flow: column;
`

const SiteHeader = styled.div`
  height: 4rem;
  width: 10rem;
  background-color: #292929;
  color: #eee;
  font-size: 2.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`

const SiteList = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li, a{
    font-size: 1.8rem;
    text-align: center;
    height: 5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #292929;
  }

  a:hover, li:hover{
    background-color: #ff7e26;
    color: #fff;
  }
`



const MobileContainer = styled.div`
  display: grid;
  grid-template-rows: 25% 1fr;
  width: 100vw;
  height: 85vh;
  background-color: ${color.jctDarkGray};
`

const MobileSiteHeader = styled.div`
  height: 4rem;
  width: 10rem;
  background-color: #292929;
  color: #eee;
  font-size: 2.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileLoginSide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-flow: column;
`

const MobileSiteList = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li, a{
    font-size: 1.8rem;
    text-align: center;
    height: 5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
  }
`


const Home = ({ data, isMobile }) => {
  return(
    isMobile ?
      <MobileContainer>
        <LogoSide>
          <img src="./static/mammoth-logo.png" />
        </LogoSide>
        <MobileLoginSide>
          <MobileSiteHeader>Sites</MobileSiteHeader>
          <MobileSiteList>
            {
              data.map((d, i) => (
                <li key={i}><Link href={`./mammoth/${d.BATTERY.toLowerCase()}`}><a>{d.BATTERY}</a></Link></li>
              ))
            }
          </MobileSiteList>
        </MobileLoginSide>
      </MobileContainer>
      :
      <Container>
        <LogoSide>
          <img src="./static/mammoth-logo.png" />
        </LogoSide>
        <LoginSide>
          <SiteHeader>Sites</SiteHeader>
          <SiteList>
            {
              data.map((d, i) => (
                <li key={i}><Link href={`./mammoth/${d.BATTERY.toLowerCase()}`}><a>{d.BATTERY}</a></Link></li>
              ))
            }
          </SiteList>
        </LoginSide>
      </Container>
  )
}

export async function getServerSideProps(ctx){
  let userAgent;
  ctx ? userAgent = ctx.req.headers['user-agent'] : userAgent = navigator.userAgent
  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  const res = await fetch('http://jct-systems.com/api/mammoth')
  const data = await res.json();

  return {
    props: { data, isMobile }
  }
} 

export default Home