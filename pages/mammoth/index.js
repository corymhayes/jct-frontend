import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import NewLayout from '../../components/NewLayout'
// import Layout from '../../../components/Layout'
// import MobileLayout from '../../../components/MobileLayout'
// import MobileCarousel from '../../../components/MobileCarousel'
// import FullDetails from '../../../components/FullDetails'
// import Details from '../../../components/Details'


const Home = ({ data }) => (
  <NewLayout
    company="mammoth"
    sites={
      data.map((site, i) => (
        <li key={i}>
          <Link href={`mammoth/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link>
        </li>
      ))
    }
  />
)

export async function getServerSideProps(ctx){
  const res = await fetch('http://localhost:3001/api/mammoth')
  const data = await res.json();

  return {
    props: { data  }
  }
} 


export default Home