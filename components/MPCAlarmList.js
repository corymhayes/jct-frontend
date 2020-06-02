import styled from 'styled-components'
import { color } from '../public/screensizes'

const AlarmList = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 2rem;
`

const GeneralList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`
const ScrubberList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`
const HiHiList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`
const LoLoList = styled.ul`
  list-style: none;
`

const AlarmListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const Indicator = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 100%;
  background-color: ${props => props.active ? "#6fcf97" : "#eaeaea"};
  margin-right: 1rem;
`

const ListTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`

const MPCAlarmList = props => (
  <AlarmList>
    <GeneralList>
      <ListTitle>General</ListTitle>
      <AlarmListItem>
        <Indicator /> Local Emergency Stop
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> Spare Di02 Shutdown
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> Low Compressor Oil Level
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> Low Compressor Cooling Water Level
      </AlarmListItem>
    </GeneralList>

    <ScrubberList>
      <ListTitle>Scrubber Liquid Level</ListTitle>
      <AlarmListItem>
        <Indicator /> High 1st Stage
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> High 2nd Stage
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> High 3rd Stage
      </AlarmListItem>
    </ScrubberList>

    <HiHiList>
      <ListTitle>HiHi</ListTitle>
      <AlarmListItem>
        <Indicator /> Suction Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator active/> 1st Stage Discharge Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> 2nd Stage Discharge Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> 3rd Stage Discharge Pressure
      </AlarmListItem>
    </HiHiList>

    <LoLoList>
      <ListTitle>LoLo</ListTitle>
      <AlarmListItem>
        <Indicator /> Suction Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> 1st Stage Discharge Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> 2nd Stage Discharge Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> 3rd Stage Discharge Pressure
      </AlarmListItem>
      <AlarmListItem>
        <Indicator /> Compressor Oil Pressure
      </AlarmListItem>
    </LoLoList>
  </AlarmList>
)

export default MPCAlarmList