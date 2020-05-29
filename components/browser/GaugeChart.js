import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import { color } from '../../public/screensizes'


const DoughnutChart = props => {
  
  const data = {
    datasets: [{
      data: [props.currentValue, (props.totalValue - props.currentValue)],
      backgroundColor: (ctx) => {
        if(ctx.dataset.data[0] < props.alarmOff){
        return [ 'lightgreen', 'rgba(0,0,0,.05)' ]
      } else if(ctx.dataset.data[0] > props.alarmOn){
          return [ 'red', 'rgba(0,0,0,.05)' ]
        } else {
          return [ '#ffcc00', 'rgba(0,0,0,.05)' ]
        }
      },
      borderWidth: 0
    }]
  }

  return (
    <GraphContainer>
      <GraphTitle>{props.name}</GraphTitle>
      <Graph>
        <Doughnut 
          data={ data }
          width={ 150 }
          height={ 150 }
          options={{ 
            cutoutPercentage: 80, 
            rotation: (-1.25 * Math.PI),
            circumference: (1.5 * Math.PI),
            tooltips: false,
            hover: false
          }}
        />
      </Graph>
      <Volume>
        <CurrentVolume>{ props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue }</CurrentVolume>
        <CurrentVolumeLabel>{props.unitOfMeasure}</CurrentVolumeLabel>
      </Volume>
    </GraphContainer>
  )
}

export default DoughnutChart    


const GraphContainer = styled.div`
  display: grid;
  grid: 25% 1fr / 1fr;
  place-items: center center;
  width: 20rem;
  height: 15rem;
`
const GraphTitle = styled.h1`
  grid-column: 1;
  grid-row: 1;
  font-size: 2.4rem;
`

const Graph = styled.div`
  grid-column: 1;
  grid-row: 2;
`

const Volume = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`

const CurrentVolume = styled.div`
  font-size: 2.4rem;
  color: ${color.jctDarkGray};
  font-weight: bold;
`

const CurrentVolumeLabel = styled.div`
  font-size: 1.8rem;
  color: ${color.jctDarkGray};
  align-self: flex-end;
  margin-bottom: .1rem;
  margin-left: .2rem;
`