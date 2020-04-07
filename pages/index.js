import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import MobileLayout from '../components/MobileLayout' 
import Details from '../components/Details'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import useMobileDetect from 'use-mobile-detect-hook'

import { color } from '../public/screensizes'



const Home = props => {
  return(
    <>
      {
        props.isMobileView ?
          <MobileLayout company_name="Doghouse Oil & Gas" site_name="Anchor Battery">
            {
              props.equipment.map(equip => (
                <Details 
                  key={equip.id} 
                  name={equip.name}
                  currentValue={equip.currentLevel}
                  totalValue={equip.totalLevel}
                  alarmOn={equip.on_level}
                  alarmOff={equip.off_level}
                />
              ))
            }
          </MobileLayout>
        :
          <Layout company_name="Doghouse Oil & Gas" site_name="Anchor Battery">
            {
              props.equipment.map(equip => (
                <Details 
                  key={equip.id} 
                  name={equip.name}
                  currentValue={equip.currentLevel}
                  totalValue={equip.totalLevel}
                  alarmOn={equip.on_level}
                  alarmOff={equip.off_level}
                />
              ))
            }
          </Layout>
      }
    </>
  )
}

Home.getInitialProps =  async ctx => {
  const { name, site } = ctx.query
  const res = await fetch(`http://jct-systems.com/api/${name}/${site}`);
  const json = await res.json();

  console.log(json);

  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)


  if(isMobileView < 0){
    return {
      isMobileView: false,
      equipment: json[1]
    }
  } else {
    return {
      isMobileView: true,
      equipment: json[1]
    }
  }

}

export default Home
