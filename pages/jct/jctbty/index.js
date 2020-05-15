import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import Layout from '../../../components/Layout'
import MobileLayout from '../../../components/MobileLayout'
import MobileCarousel from '../../../components/MobileCarousel'
import FullDetails from '../../../components/FullDetails'
import Details from '../../../components/Details'


const JCTBTY = ({ data, isMobileView }) => (
  isMobileView ?
    <MobileLayout company_name={"JCT"} site_name={"JCTBTY"} date={data[0].mDate} time={data[0].mTime}>
      <MobileCarousel>
        <FullDetails 
          name={data[0].S1} 
          unitOfMeasure={data[0].S2.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
          tPumpOn={data[0].V3}
          tPumpOff={data[0].V4}
          alarmOn={data[0].V5}
          alarmOff={data[0].V6}
        />

        <Details 
          name={data[0].S5} 
          unitOfMeasure={data[0].S6.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />

        <Details 
          name={data[0].S7} 
          unitOfMeasure={data[0].S8.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />
      </MobileCarousel>

      <MobileCarousel>
        <FullDetails 
          name={data[0].S3} 
          unitOfMeasure={data[0].S4.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
          alarmOn={data[0].V5}
          alarmOff={data[0].V6}
        />

        <Details 
          name={data[0].S9} 
          unitOfMeasure={data[0].S10.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />
        
        <Details 
          name={data[0].S11} 
          unitOfMeasure={data[0].S12.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />
      </MobileCarousel>

      <MobileCarousel>
        <Details 
          name={data[0].S13} 
          unitOfMeasure={data[0].S14.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />

        <Details 
          name={data[0].S15} 
          unitOfMeasure={data[0].S16.toLowerCase()}
          currentValue={data[0].V1}
          totalValue={16}
        />
      </MobileCarousel>
    </MobileLayout>
    :
    <Layout company_name={"JCT"} site_name={"JCTBTY"} date={data[0].mDate} time={data[0].mTime}>
      <FullDetails 
        name={data[0].S1} 
        unitOfMeasure={data[0].S2.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
        tPumpOn={data[0].V3}
        tPumpOff={data[0].V4}
        alarmOn={data[0].V5}
        alarmOff={data[0].V6}
      />

      <Details 
        name={data[0].S5} 
        unitOfMeasure={data[0].S6.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />

      <Details 
        name={data[0].S7} 
        unitOfMeasure={data[0].S8.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />

      <FullDetails 
        name={data[0].S3} 
        unitOfMeasure={data[0].S4.toLowerCase()}
        currentValue={data[0].V6}
        totalValue={16}
        tPumpOn={data[0].V6}
        tPumpOff={data[0].V7}
        alarmOn={data[0].V8}
        alarmOff={data[0].V8}
      />

      <Details 
        name={data[0].S9} 
        unitOfMeasure={data[0].S10.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />
      
      <Details 
        name={data[0].S11} 
        unitOfMeasure={data[0].S12.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />

      <Details 
        name={data[0].S13} 
        unitOfMeasure={data[0].S14.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />

      <Details 
        name={data[0].S15} 
        unitOfMeasure={data[0].S16.toLowerCase()}
        currentValue={data[0].V1}
        totalValue={16}
      />
    </Layout>
)

export async function getServerSideProps(ctx){
  const res = await fetch('http://jct-systems.com/api/jctbty')
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


export default JCTBTY