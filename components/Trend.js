import { defaults, Line } from 'react-chartjs-2'

import styled from 'styled-components'
import { color } from '../public/screensizes'


const Trend = props => {
  defaults.global.defaultFontFamily = 'Industry'
  defaults.global.defaultFontColor = color.jctLightGray

  const data = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0,0,0,165);
    gradient.addColorStop(1, 'rgba(255,255,255,.01)')
    gradient.addColorStop(0, color.jctLightGray);

    return {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [4, 8, 6, 9, 11, 7, 9],
        borderWidth: 2,
        borderColor: color.jctOrange,
        pointBackgroundColor: color.jctOrange,
        backgroundColor: gradient,
        cubicInterpolationMode: 'monotone',
        // lineTension: 0
      }]
    }
  }

  return(
    <Graph>
      <Line
        data={ data }
        options={{
          legend: false,
          // tooltips: false,
          scales: {
            // Left side of graph
            yAxes: [{
              ticks: {
                min: 0,
                max: 16,
                stepSize: 4,
                display: false
              },
              gridLines: {
                display: false
              },
            }],
            // Bottom of graph
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }}
      />
    </Graph>
  )
}

export default Trend

const Graph = styled.div`
  width: 100%;
`