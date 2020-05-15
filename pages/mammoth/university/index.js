import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import Layout from '../../../components/Layout'
import MobileLayout from '../../../components/MobileLayout'
import FullDetails from '../../../components/FullDetails'
import Details from '../../../components/Details'


const Home = ({ data, isMobileView }) => (
  isMobileView ?
    <MobileLayout company_name={"Mammoth"} site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
      <FullDetails 
        name={data[0].S1} 
        currentValue={data[0].V1}
        totalValue={16}
        unitOfMeasure={data[0].S2.toLowerCase()}
        tPumpOn={data[0].V3}
        tPumpOff={data[0].V4}
        alarmOn={data[0].V5}
        alarmOff={data[0].V6}
      />
      <Details 
        name={data[0].S3} 
        currentValue={data[0].V2}
        totalValue={16}
        unitOfMeasure={data[0].S4.toLowerCase()}
      />
    </MobileLayout>
    :
    <Layout company_name={"Mammoth"} site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
      <FullDetails 
        name={data[0].S1} 
        currentValue={data[0].V1}
        totalValue={16}
        unitOfMeasure={data[0].S2.toLowerCase()}
        tPumpOn={data[0].V3}
        tPumpOff={data[0].V4}
        alarmOn={data[0].V5}
        alarmOff={data[0].V6}
      />
      <Details 
        name={data[0].S3} 
        currentValue={data[0].V2}
        totalValue={16}
        unitOfMeasure={data[0].S4.toLowerCase()}
      />
    </Layout>
)

export async function getServerSideProps(ctx){
  const res = await fetch('http://jct-systems.com/api/university')
  const data = await res.json();

  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
    
  if(isMobileView < 0){
    return {
      props: { data, isMobileView: false }
    }
  } else {
    return {
      props: { data, isMobileView: true }
    }
  }
} 


export default Home