import styled from 'styled-components'
import { retina, color } from '../public/screensizes'

const Container = styled.div`
  display: flex;
  flex-flow: column;
`

const Title = styled.h3`
  font-weight: bold;
  color: ${color.jctOrange};
  font-size: 1.8rem;
  margin-bottom: .25rem;
`

const AlarmList = styled.ul`
  list-style: none;
`

const AlarmListItem = styled.li`
  color: ${color.jctLightGray};
  font-size: 1.8rem;
  margin-bottom: .25rem;
`


const Alarms = props => (
  <Container>
    <Title>Alarms</Title>

    <AlarmList>
      <AlarmListItem>On: {props.on}</AlarmListItem>
      <AlarmListItem>Off: {props.off}</AlarmListItem>
    </AlarmList>
  </Container>
)

export default Alarms