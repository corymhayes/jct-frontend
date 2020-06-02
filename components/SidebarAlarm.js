import styled from 'styled-components'

const AlarmList = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 2rem;
`

const GeneralList = styled.div`
  margin-top: 2rem;
`

const ListTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: .5rem;
  width: 10rem;
  display: flex;
  font-weight: bold;
`

const DetailsAlarmContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;
  padding-top: 1rem;
  width: 50%;
  
  &:first-of-type{
    border-top: 1px solid #000;
  }
`

const AlarmTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`

const AlarmOnOff = styled.div`
  font-size: 1.6rem;
`

const AlarmOnOffNum = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`

const MPCAlarmList = props => (
  <AlarmList>
    <GeneralList>
      <ListTitle>Water</ListTitle>
      <DetailsAlarmContainer>
        <AlarmTitle>Alarm</AlarmTitle>
        <AlarmOnOff>
          On: <AlarmOnOffNum>{ props.alarmOn !== undefined ? props.alarmOn.toFixed(2) : props.alarmOn }</AlarmOnOffNum> Off: <AlarmOnOffNum>{ props.alarmOff !== undefined ? props.alarmOff.toFixed(2) : props.alarmOff }</AlarmOnOffNum>
        </AlarmOnOff>
      </DetailsAlarmContainer>
      <DetailsAlarmContainer>
        <AlarmTitle>T-Pump</AlarmTitle>
        <AlarmOnOff>
          On: <AlarmOnOffNum>{ props.tpumpOn !== undefined ? props.tpumpOn.toFixed(2) : props.tpumpOn }</AlarmOnOffNum> Off: <AlarmOnOffNum>{ props.tpumpOff !== undefined ? props.tpumpOff.toFixed(2) : props.tpumpOff }</AlarmOnOffNum>
        </AlarmOnOff>
      </DetailsAlarmContainer>
    </GeneralList>
  </AlarmList>
)

export default MPCAlarmList