import styled from 'styled-components'
import { color } from '../public/screensizes'

const DetailsAlarmContainer = styled.p`
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid ${color.jctDarkGray};
  margin-left: 2rem;
`

const AlarmTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`

const AlarmOnOff = styled.div`
  font-size: 1.8rem;
`

const AlarmOnOffNum = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
`



const Alarms = props => (
  <DetailsAlarmContainer>
    <AlarmTitle>{props.alarmType}</AlarmTitle>
    <AlarmOnOff>
      On: <AlarmOnOffNum>{ props.on !== undefined ? props.on.toFixed(2) : props.on }</AlarmOnOffNum> Off: <AlarmOnOffNum>{ props.off !== undefined ? props.off.toFixed(2) : props.off }</AlarmOnOffNum>
    </AlarmOnOff>
  </DetailsAlarmContainer>
)

export default Alarms