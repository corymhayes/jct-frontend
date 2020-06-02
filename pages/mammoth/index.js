import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

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



const Home = ({ data }) => (
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

export async function getServerSideProps(ctx){
  const res = await fetch('http://jct-systems.com/api/mammoth')
  const data = await res.json();

  return {
    props: { data }
  }
} 


export default Home