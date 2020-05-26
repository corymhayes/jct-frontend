import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import Layout from '../../../components/Layout'
import NewLayout from '../../../components/NewLayout'
import MobileLayout from '../../../components/MobileLayout'
import MobileCarousel from '../../../components/MobileCarousel'
import FullDetails from '../../../components/FullDetails'
import Details from '../../../components/Details'
import NewDetails from '../../../components/NewDetails'
import DoughnutChart from '../../../components/DoughnutChart'


const JCTBTY = ({ data, sites }) => (
    <NewLayout 
      sites={ sites.map((site, i) => <li key={i}><Link href={`/jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
      company={"jct"} 
      sitename={"BTY"} 
      date={data[0].mDate} 
      time={data[0].mTime}
    >
      <NewDetails 
        resourceType="Water"
        tPumpOn={data[0].V3}
        tPumpOff={data[0].V4}
        alarmOn={data[0].V5}
        alarmOff={data[0].V6}
      >
        <DoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
        <DoughnutChart name={data[0].S5} currentValue={data[0].V9} totalValue={16} unitOfMeasure={data[0].S6.toLowerCase()} />
        <DoughnutChart name={data[0].S7} currentValue={data[0].V10} totalValue={16} unitOfMeasure={data[0].S8.toLowerCase()} />
      </NewDetails>

      <NewDetails 
        resourceType="Oil"
        tPumpOn={data[0].V3}
        tPumpOff={data[0].V4}
        alarmOn={data[0].V5}
        alarmOff={data[0].V6}
      >
        <DoughnutChart name={data[0].S3} currentValue={data[0].V6} totalValue={16} unitOfMeasure={data[0].S4.toLowerCase()} />
        <DoughnutChart name={data[0].S9} currentValue={data[0].V11} totalValue={16} unitOfMeasure={data[0].S10.toLowerCase()} />
        <DoughnutChart name={data[0].S11} currentValue={data[0].V12} totalValue={16} unitOfMeasure={data[0].S12.toLowerCase()} />
      </NewDetails>

      <NewDetails 
        resourceType="Aux" 
        // tPumpOn={data[0].V3}
        // tPumpOff={data[0].V4}
        // alarmOn={data[0].V5}
        // alarmOff={data[0].V6}
      >
        <DoughnutChart name={data[0].S13} currentValue={data[0].V13} totalValue={16} unitOfMeasure={data[0].S14.toLowerCase()} />
        <DoughnutChart name={data[0].S15} currentValue={data[0].V14} totalValue={16} unitOfMeasure={data[0].S16.toLowerCase()} />
      </NewDetails>

    </NewLayout>
)

export async function getServerSideProps(ctx){
  const res = await fetch(`http://jct-systems.com/api/jctbty`)
  const res1 = await fetch(`http://localhost:3001/api/jct`)
  
  const data = await res.json();
  const sites = await res1.json();

  return {
    props: { data, sites, isMobileView: false }
  }
} 


export default JCTBTY