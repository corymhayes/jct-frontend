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


const North = ({ data, sites }) => (
  <NewLayout
    sites={ sites.map((site, i) => <li key={i}><Link href={`/jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
    company={"jct"} 
    sitename={"North"} 
    date={data[0].mDate} 
    time={data[0].mTime}
  >
    <NewDetails
      resourceType='Water'
      name={data[0].S1} 
      unitOfMeasure={data[0].S2.toLowerCase()}
      currentValue={data[0].V1}
      totalValue={16}
      tPumpOn={data[0].V3}
      tPumpOff={data[0].V4}
      alarmOn={data[0].V5}
      alarmOff={data[0].V6}
    >
      <DoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
    </NewDetails>
  </NewLayout>
)

export async function getServerSideProps(ctx){
  const res1 = await fetch('http://localhost:3001/api/jct')
  const res = await fetch('http://localhost:3001/api/jct/jctbty')
  
  const sites = await res1.json();
  const data = await res.json();

  console.log(data);

  return {
    props: { data, sites }
  }
} 


export default North