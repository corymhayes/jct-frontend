import { color } from '../public/screensizes'
import styled from 'styled-components'
import Link from 'next/link'
// import { isMobile } from 'react-device-detect'

const Container = styled.main`
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

const MobileContainer = styled.div`
  display: grid;
  grid-template-rows: 20rem 1fr;
  width: 100vw;
  height: 85vh;
  background-color: ${color.jctDarkGray};
`

const MobileLoginSide = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;

  input[type="text"],
  input[type="password"]{
    height: 5rem;
    width: 75%;
    margin-bottom: 2rem;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,.5);
    border-radius: 0;
    color: #fff;
    font-family: 'Industry', sans-serif;
    font-size: 1.4rem;
  }


  input[type="text"]::placeholder,
  input[type="password"]::placeholder{
    font-family: 'Industry', sans-serif;
    font-size: 1.4rem;
    color: #fff;
    padding-bottom: 3rem;
    padding-left: .5rem;
  }

  input[type="password"]{
    margin-bottom: 5rem;
  }

  button, a{
    height: 6rem;
    width: 50%;
    background-color: #ff7e26;
    border: none;
    font-family: 'Industry';
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
  }
`

const Home = ({ isMobile }) => {

  return(
    isMobile ? 
      <MobileContainer>
        <LogoSide>
          <img src="./static/jct-logo.png" />
        </LogoSide>
        <MobileLoginSide>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button><Link href="./mammoth"><a>LOGIN</a></Link></button>
       </MobileLoginSide>
      </MobileContainer>
      :
      <Container>
       <LogoSide>
         <img src="./static/jct-logo.png" />
       </LogoSide>
       <LoginSide>
         <form>
           <label htmlFor="username">username</label>
           <input type="text" name="username" />
           <label htmlFor="password">password</label>
           <input type="text" name="password" />
           <button><Link href="./mammoth"><a>LOGIN</a></Link></button>
         </form>
       </LoginSide>
     </Container>
  )
}

export default Home

Home.getInitialProps = ({ req }) => {
  let userAgent;
  
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent'] // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
  }

  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return { isMobile }
}