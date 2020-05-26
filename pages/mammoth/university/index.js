import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import Layout from '../../../components/Layout'
import NewLayout from '../../../components/NewLayout'
import MobileLayout from '../../../components/MobileLayout'
import FullDetails from '../../../components/FullDetails'
import Details from '../../../components/Details'
import NewDetails from '../../../components/NewDetails'
import DoughnutChart from '../../../components/DoughnutChart'


const Home = ({ data, sites, isMobileView }) => (
  // isMobileView ?
  //   <MobileLayout company_name={"Mammoth"} site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
  //     <FullDetails 
  //       name={data[0].S1} 
  //       currentValue={data[0].V1}
  //       totalValue={16}
  //       unitOfMeasure={data[0].S2.toLowerCase()}
  //       tPumpOn={data[0].V3}
  //       tPumpOff={data[0].V4}
  //       alarmOn={data[0].V5}
  //       alarmOff={data[0].V6}
  //     />
  //     <Details 
  //       name={data[0].S3} 
  //       currentValue={data[0].V2}
  //       totalValue={16}
  //       unitOfMeasure={data[0].S4.toLowerCase()}
  //     />
  //   </MobileLayout>
  //   :
    // <NewLayout site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
    //   <FullDetails 
    //     name={data[0].S1} 
    //     currentValue={data[0].V1}
    //     totalValue={16}
    //     unitOfMeasure={data[0].S2.toLowerCase()}
    //     tPumpOn={data[0].V3}
    //     tPumpOff={data[0].V4}
    //     alarmOn={data[0].V5}
    //     alarmOff={data[0].V6}
    //   />
    //   <Details 
    //     name={data[0].S3} 
    //     currentValue={data[0].V2}
    //     totalValue={16}
    //     unitOfMeasure={data[0].S4.toLowerCase()}
    //   />
    // </NewLayout>

  <NewLayout 
    company='mammoth'
    sites={ sites.map((site, i) => <li key={i}><Link href={`/mammoth/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
    sitename={"University"} 
    date={data[0].mDate} 
    time={data[0].mTime}
  >
    <NewDetails
      resourceType='Water'
      name={data[0].S1} 
      unitOfMeasure={data[0].S2.toLowerCase()}
      currentValue={data[0].V1}
      totalValue={16}
      tpumpOn={data[0].V3}
      tpumpOff={data[0].V4}
      alarmOn={data[0].V5}
      alarmOff={data[0].V6}
    >
      <DoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
      <DoughnutChart name={data[0].S3} currentValue={data[0].V2} totalValue={16} unitOfMeasure={data[0].S4.toLowerCase()} />
    </NewDetails>
  </NewLayout>
)

export async function getServerSideProps(ctx){
  const res = await fetch('http://jct-systems.com/api/university')
  const data = await res.json();

  const res1 = await fetch('http://localhost:3001/api/mammoth')
  const sites = await res1.json();

  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
    
  if(isMobileView < 0){
    return {
      props: { data, sites, isMobileView: false }
    }
  } else {
    return {
      props: { data, sites, isMobileView: true }
    }
  }
} 


export default Home