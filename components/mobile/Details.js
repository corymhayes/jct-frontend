import styled from 'styled-components'
import { color } from '../../public/screensizes'

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
`

const NameAlarmsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const DetailsName = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: ${color.jctDarkGray};
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DoughnutChartContainer = styled.div`
  display: flex;
  justify-content: ${props => props.isTable ? "center" : "flex-start"};
`


const NewMobileDetails = props => (
  <DetailsContainer>
    <NameAlarmsContainer>
      <DetailsName>{props.resourceType}</DetailsName>
    </NameAlarmsContainer>
    
    <DoughnutChartContainer isTable={props.isTable} >
      {props.children}
    </DoughnutChartContainer>
  </DetailsContainer>
)

export default NewMobileDetails