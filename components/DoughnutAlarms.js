import styled from 'styled-components'

import DoughnutChart from './DoughnutChart'
import Alarms from './Alarms'


const DoughnutAlarms = props => (
  <Container>
    <DoughnutChart currentValue={props.currentValue} totalValue={props.totalValue} unitOfMeasure={props.unitOfMeasure} alarmOn={props.alarmOn} alarmOff={props.alarmOff} />
    <AlarmsContainer>
      <Alarms title="Transfer Pump" on={props.tPumpOn} off={props.tPumpOff} />
      <Alarms title="Alarm" on={props.alarmOn} off={props.alarmOff} />
    </AlarmsContainer>
  </Container>
)

export default DoughnutAlarms

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: space-around;
  align-items: center; 
`

const AlarmsContainer = styled.div`
  display: flex;
  flex-flow: column;

  &:first-child{
    margin-bottom: 1rem;
  }
`