import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

import BrowserLayout from '../../../components/browser/Layout'
import BrowserDetails from '../../../components/browser/Details'
import BrowserGaugeChart from '../../../components/browser/GaugeChart'

import MobileLayout from '../../../components/mobile/Layout'
import MobileDetails from '../../../components/mobile/Details'
import MobileGaugeChart from '../../../components/mobile/GaugeChart'


const CEH = ({ data, sites }) => (
  isMobile ?
    <MobileLayout 
      sites={ sites.map((site, i) => <li key={i}><Link href={`./${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
      company={'mammoth'}
      sitename={'CEH'} 
      date={data[0].mDate} 
      time={data[0].mTime}
    >
      <MobileDetails
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
        <MobileGaugeChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
        <MobileGaugeChart name={data[0].S3} currentValue={data[0].V2} totalValue={16} unitOfMeasure={data[0].S4.toLowerCase()} />
      </MobileDetails>
    </MobileLayout>
  :
    <BrowserLayout 
      sites={ sites.map((site, i) => <li key={i}><Link href={`./${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
      company={'mammoth'}
      sitename={'CEH'} 
      date={data[0].mDate} 
      time={data[0].mTime}
    >
      <BrowserDetails
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
        <BrowserGaugeChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
        <BrowserGaugeChart name={data[0].S3} currentValue={data[0].V2} totalValue={16} unitOfMeasure={data[0].S4.toLowerCase()} />
      </BrowserDetails>
    </BrowserLayout>
)

export async function getServerSideProps(ctx){
  const res = await fetch('http://jct-systems.com/api/mammoth/ceh')
  const res1 = await fetch('http://jct-systems.com/api/mammoth')
  
  const data = await res.json()
  const sites = await res1.json()

  return {
    props: { data, sites }
  }
} 


export default CEH