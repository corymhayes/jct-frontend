import styled from 'styled-components'
import { retina, standard, color } from '../public/screensizes'

const Container = styled.div`
  display: flex;
  flex-flow: column;

  @media ${standard.tabletP}{
    margin-left: 1rem;
  }

  @media ${standard.tabletL}{
    margin-left: 1rem;
  }
`

const Title = styled.h3`
  font-weight: bold;
  color: ${color.jctOrange};
  font-size: 1.8rem;
  margin-bottom: .25rem;
  
  @media ${standard.tabletP}{
    font-size: 1.5rem;
  }
  @media ${standard.tabletL}{
    font-size: 1.5rem;
  }

  @media ${retina.laptopM}{
    font-size: 1.8rem;
  }
`

const AlarmList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`

const AlarmListItem = styled.li`
  color: ${color.jctLightGray};
  font-size: 1.8rem;
  margin-bottom: .25rem;
  
  @media ${standard.tabletP}{
    font-size: 1.5rem;
  }

  @media ${standard.tabletL}{
    font-size: 1.5rem;
  }
  
  @media ${retina.laptopM}{
    font-size: 1.8rem;
  }
`


const Alarms = props => (
  <Container>
    <Title>{props.title}</Title>

    <AlarmList>
      <AlarmListItem>On: { props.on !== undefined ? props.on.toFixed(2) : props.on }</AlarmListItem>
      <AlarmListItem>Off: { props.off !== undefined ? props.off.toFixed(2) : props.off }</AlarmListItem>
    </AlarmList>
  </Container>
)

export default Alarms