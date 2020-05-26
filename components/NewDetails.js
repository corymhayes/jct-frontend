import styled from 'styled-components'
import { color, standard, retina } from '../public/screensizes'

import Trend from './Trend'
import DoughnutChart from './DoughnutChart'
import NewAlarms from './NewAlarms'

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 15rem;
  
  /* @media ${standard.desktop}{
    max-width: 35rem;
    max-height: 35rem;
  }

  @media ${retina.mobile}{
    padding: 2rem 2rem 4rem 2rem;
  } */
`

const NameAlarmsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const DetailsName = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  background-color: ${color.jctDarkGray};
  padding: 1rem 2rem;
  max-width: auto;

  /* @media ${standard.tabletP}{
    font-size: 2rem;
  }

  @media ${standard.tabletL}{
    font-size: 2rem;
  }

  @media ${retina.laptopM}{
    font-size: 3rem;
  } */
`
const DoughnutChartContainer = styled.div`
  display: flex;
`


const Details = props => (
  <DetailsContainer>
    <NameAlarmsContainer>
      <DetailsName>{props.resourceType}</DetailsName>
      <NewAlarms alarmType={'Alarm'} on={props.alarmOn} off={props.alarmOff} />
      <NewAlarms alarmType={'T-Pump'} on={props.tpumpOn} off={props.tpumpOff} />
    </NameAlarmsContainer>
    
    <DoughnutChartContainer>
      {props.children}
    </DoughnutChartContainer>
  </DetailsContainer>
)

export default Details