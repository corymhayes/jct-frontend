import styled from 'styled-components'

const Logo = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(33,33,33);
  display: flex;
  align-items: center;
  justify-content: center;
`


const Home = () => (
  <Logo>
    <img alt="company logo" src="/static/background.jpg" />
  </Logo>
)

export default Home