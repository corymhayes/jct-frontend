import styled from 'styled-components'

import DoughnutChart from './DoughnutChart'
import Alarms from './Alarms'


const DoughnutAlarms = props => (
  <Container>
    <DoughnutChart currentValue={props.currentValue} totalValue={props.totalValue} />
    <Alarms on={props.alarmOn} off={props.alarmOff} />
  </Container>
)

export default DoughnutAlarms

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 2rem;
  justify-content: space-around;
  align-items: center;
`