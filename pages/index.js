import styled from 'styled-components'
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

  img{
    width: 50%;
  }
`

const LoginSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  form{
    display: flex;
    flex-flow: column;
  }

  label{
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }

  input[type="text"]{
    height: 5rem;
    width: 35rem;
    margin-bottom: 2rem;
  }

  input[type="text"]:last-of-type{
    margin-bottom: 7rem;
  }

  button, a{
    height: 6rem;
    background-color: #ff7e26;
    border: none;
    font-family: 'Industry';
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
  }

`



const Home = ({ data }) => (
  <Container>
    <LogoSide>
      <img src="./static/jct-logo.png" />
    </LogoSide>
    <LoginSide>
      <form>
        <label for="username">username</label>
        <input type="text" name="username" />
        <label for="password">password</label>
        <input type="text" name="password" />
        <button><Link href="/mammoth"><a>LOGIN</a></Link></button>
      </form>
    </LoginSide>
  </Container>
)

export default Home




