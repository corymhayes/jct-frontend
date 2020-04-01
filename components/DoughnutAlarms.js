import styled from 'styled-components'

import DoughnutChart from './DoughnutChart'
import Alarms from './Alarms'


const DoughnutAlarms = props => (
  <Container>
    <DoughnutChart currentValue='8.00' totalValue='16' />
    <Alarms on='8.00' off='12.00' />
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