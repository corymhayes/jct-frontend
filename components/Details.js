import styled from 'styled-components'
import { color, standard, retina } from '../public/screensizes'

import Trend from '../components/Trend'
import DoughnutChart from './DoughnutChart'

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${color.jctWhite};
  
  @media ${standard.desktop}{
    max-width: 35rem;
    max-height: 35rem;
  }

  @media ${retina.mobile}{
    padding: 2rem 2rem 4rem 2rem;
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
  margin-bottom: 2rem;
  background-color: rgba(41,41,41,.15);
`

const Details = props => (
  <DetailsContainer>
    <DetailsName>{props.name}</DetailsName>
    <Underline />
    <DoughnutChart currentValue={props.currentValue} totalValue={props.totalValue} unitOfMeasure={props.unitOfMeasure} />
    {/* <Trend 
      mon={props.mon}
      tue={props.tue}
      wed={props.wed}
      thu={props.thu}
      fri={props.fri}
      sat={props.sat}
      sun={props.sun}
    /> */}
  </DetailsContainer>
)

export default Details