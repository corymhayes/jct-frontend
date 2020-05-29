import styled from 'styled-components'
import { color } from '../../public/screensizes'

import Alarms from '../Alarms'

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 10rem;
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
`
const DoughnutChartContainer = styled.div`
  display: flex;
`


const Details = props => (
  <DetailsContainer>
    <NameAlarmsContainer>
      <DetailsName>{props.resourceType}</DetailsName>
      {
        props.isTable ?
          <></>
        :
          <>        
            <Alarms alarmType={'Alarm'} on={props.alarmOn} off={props.alarmOff} />
            <Alarms alarmType={'T-Pump'} on={props.tpumpOn} off={props.tpumpOff} />
          </>
      }
    </NameAlarmsContainer>
    
    <DoughnutChartContainer>
      {props.children}
    </DoughnutChartContainer>
  </DetailsContainer>
)

export default Details