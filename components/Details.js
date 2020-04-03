import styled from 'styled-components'
import { color, standard, retina } from '../public/screensizes'

import DoughnutAlarms from '../components/DoughnutAlarms'
import Trend from '../components/Trend'

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${color.jctWhite};

  @media ${retina.mobile}{
    padding: 2rem;
  }
`

const DetailsName = styled.h1`
  color: #FF7E26;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media ${standard.tabletP}{
    font-size: 2rem;
  }

  @media ${standard.tabletL}{
    font-size: 2rem;
  }

  @media ${retina.laptopM}{
    font-size: 3rem;
  }
`

const Underline = styled.div`
  height: 2px;
  background-color: rgba(41,41,41,.15);
`

const Details = props => (
  <DetailsContainer>
    <DetailsName>{props.name}</DetailsName>
    <Underline />
    <DoughnutAlarms />
    <Trend />
  </DetailsContainer>
)

export default Details