import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { withOrientationChange } from 'react-device-detect'

import BrowserLayout from '../../components/browser/Layout'
import MobileLayout from '../../components/mobile/Layout'
import MobileDetails from '../../components/mobile/Details'
import GaugeChart from '../../components/mobile/GaugeChart'
import TankCarousel from '../../components/TankCarousel'
// import Layout from '../../../components/Layout'
// import MobileLayout from '../../../components/MobileLayout'
// import MobileCarousel from '../../../components/MobileCarousel'
// import FullDetails from '../../../components/FullDetails'
// import Details from '../../../components/Details'


let Home = (props, { data, isMobileView }) => {
  const { isLandscape, isPortrait } = props

  if(isLandscape){
    return(
      <MobileLayout company="mammoth" site_name='University' date='01/01/2020' time='5:20 PM'>
        <MobileDetails resourceType='Water' alarmOn={12} alarmOff={10}>
          <GaugeChart name={'Tank 1'} currentValue={7} totalValue={16} unitOfMeasure={'ft'} />
          <GaugeChart name={'Tank 2'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
          <GaugeChart name={'Tank 3'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
          <GaugeChart name={'Tank 4'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
        </MobileDetails>
        <MobileDetails resourceType='Oil' alarmOn={12} alarmOff={10}>
          <GaugeChart name={'Tank 1'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
        </MobileDetails>
      </MobileLayout>
    )
  }

  if(isPortrait){
    return(
      <MobileLayout sites={
          props.data.map((site, i) => (
            <li key={i}>
              <Link href={`jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link>
            </li>
          ))
        }company="jct" site_name='University' date='01/01/2020' time='5:20 PM'>
        <MobileDetails resourceType='Water' alarmOn={12} alarmOff={10}>
          <TankCarousel slideNum={4}>
            <GaugeChart name={'Tank 1'} currentValue={7} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
            <GaugeChart name={'Tank 2'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
            <GaugeChart name={'Tank 3'} currentValue={12} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
            <GaugeChart name={'Tank 4'} currentValue={13} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
            <GaugeChart name={'Tank 5'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
            <GaugeChart name={'Tank 6'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
          </TankCarousel>
        </MobileDetails>
        
        <MobileDetails resourceType='Oil' alarmOn={12} alarmOff={10}>
          <GaugeChart name={'Tank 1'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
        </MobileDetails>
      </MobileLayout>
    )
  }

  return(
    <BrowserLayout
      company="jct" 
      sites={
        props.data.map((site, i) => (
          <li key={i}>
            <Link href={`jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link>
          </li>
        ))
      }
    />
  )
}

export async function getServerSideProps(ctx){
  const res = await fetch('http://localhost:3001/api/jct')
  const data = await res.json();

  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
    
    if(isMobileView < 0){
      return {
        props: {
          isMobileView: false,
          data
        }
      }
    } else {
      return {
        props: {
          isMobileView: true,
          data
        }
      }
    }
} 

Home = withOrientationChange(Home)


export default Home