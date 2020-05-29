import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { BrowserView, MobileView } from 'react-device-detect'

import NewLayout from '../../../components/NewLayout'
import NewDetails from '../../../components/NewDetails'
import DoughnutChart from '../../../components/DoughnutChart'

import NewMobileLayout from '../../../components/NewMobileLayout'
import NewMobileDetails from '../../../components/NewMobileDetails'
import NewMobileDoughnutChart from '../../../components/NewMobileDoughnutChart'


const North = ({ data, sites }) => (
  <>
  <BrowserView>
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
  </BrowserView>

  <MobileView>
      <NewMobileLayout
        sites={ sites.map((site, i) => <li key={i}><Link href={`/jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
        company={"jct"} 
        sitename={"North"} 
        date={data[0].mDate} 
        time={data[0].mTime}
      >
        <NewMobileDetails
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
          <NewMobileDoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
        </NewMobileDetails>
      </NewMobileLayout>
    </MobileView>
  </>
)

export async function getServerSideProps(ctx){
  const res1 = await fetch('http://localhost:3001/api/jct')
  const res = await fetch('http://localhost:3001/api/jct/jctbty')
  
  const sites = await res1.json();
  const data = await res.json();
  
  return {
    props: { data, sites }
  }
} 


export default North