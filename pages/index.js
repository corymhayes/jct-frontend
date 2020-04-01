import styled from 'styled-components'

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
            <Details name="Oil Tank 1" />
            <Details name="Oil Tank 2" />
            <Details name="Water Tank 1" />
            <Details name="Water Tank 2" />
          </MobileLayout>
        :
          <Layout company_name="Doghouse Oil & Gas" site_name="Anchor Battery">
            <Details name="Oil Tank 1"/>
            <Details name="Oil Tank 2"/>
            <Details name="Oil Tank 3"/>
            <Details name="Water Tank 1"/>
            <Details name="Water Tank 2"/>
            <Details name="Water Tank 3"/>
          </Layout>
      }
    </>
  )
}

Home.getInitialProps =  async ctx => {
  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)

  if(isMobileView < 0){
    return {isMobileView: false}
  } else {
    return {isMobileView: true}
  }

}

export default Home