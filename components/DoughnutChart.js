import { Doughnut } from 'react-chartjs-2'

import styled from 'styled-components'
import { color } from '../public/screensizes'


const DoughnutChart = props => {
  
  const data = {
    datasets: [{
      data: [props.currentValue, (props.totalValue - props.currentValue)],
      // backgroundColor: [ color.jctOrange, 'rgba(0,0,0, .05)' ],
      backgroundColor: (ctx) => {
        // const i = ctx.dataIndex
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
  grid: 1fr / 1fr;
  place-items: center;
`

const Graph = styled.div`
  grid-row: 1;
  grid-column: 1;
`

const Volume = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 1.5rem;
`

const CurrentVolume = styled.div`
  font-size: 2.5rem;
  color: ${color.jctDarkGray};
  font-weight: bold;
`

const CurrentVolumeLabel = styled.div`
  font-size: 1.5rem;
  color: ${color.jctLightGray};
`