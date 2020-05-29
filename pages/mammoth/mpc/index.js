import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { BrowserView, MobileView } from 'react-device-detect'

import BrowserLayout from '../../../components/browser/Layout'
import BrowserDetails from '../../../components/browser/Details'
import BrowserGaugeChart from '../../../components/browser/GaugeChart'

import MobileLayout from '../../../components/mobile/Layout'
import MobileDetails from '../../../components/mobile/Details'
import MobileGaugeChart from '../../../components/mobile/GaugeChart'

import Table from '../../../components/Table'

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  padding: 1rem 1.5rem;

  &:nth-child(odd){
    background-color: rgba(0,0,0,.1);
  }
`

const CellHeader = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`

const CellData = styled.span`
  font-size: 1.4rem;
  justify-self: end;
`



const North = ({ data, sites }) => (
  <>
  <BrowserView>
    <BrowserLayout
      sites={ sites.map((site, i) => <li key={i}><Link href={`./mammoth/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
      company={"mammoth"} 
      sitename={"Mary Price Compressor"} 
      date={data[0].mDate} 
      time={data[0].mTime}
    >
      <BrowserDetails resourceType='PSI' isTable>
        <Table>
          <TableRow>
            <CellHeader>Suction</CellHeader>
            <CellData>{data[0].D0}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 1 Discharge</CellHeader>
            <CellData>{data[0].D1}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 1 Discharge</CellHeader>
            <CellData>{data[0].D2}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 2 Discharge</CellHeader>
            <CellData>{data[0].D3}</CellData>
          </TableRow>
        </Table>
      </BrowserDetails>
      
      <BrowserDetails resourceType='RPM' isTable>
        <Table>
          <TableRow>
            <CellHeader>Motor VFD</CellHeader>
            <CellData>{data[0].D4}</CellData>
          </TableRow>
        </Table>
      </BrowserDetails>
      
      <BrowserDetails resourceType='Temp' isTable>
        <Table>
          <TableRow>
            <CellHeader>Discharge Cylinder #1</CellHeader>
            <CellData>{data[0].D5}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Discharge Cylinder #2</CellHeader>
            <CellData>{data[0].D6}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Discharge Cylinder #3</CellHeader>
            <CellData>{data[0].D7}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #1</CellHeader>
            <CellData>{data[0].D8}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #2</CellHeader>
            <CellData>{data[0].D9}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #3</CellHeader>
            <CellData>{data[0].D10}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #4</CellHeader>
            <CellData>{data[0].D11}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #5</CellHeader>
            <CellData>{data[0].D12}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #6</CellHeader>
            <CellData>{data[0].D13}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 3 Suction</CellHeader>
            <CellData>{data[0].D14}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Compressor Oil</CellHeader>
            <CellData>{data[0].D15}&deg;</CellData>
          </TableRow>
        </Table>
      </BrowserDetails>
    </BrowserLayout>
  </BrowserView>

  <MobileView>
    <MobileLayout
      sites={ sites.map((site, i) => <li key={i}><Link href={`./mammoth/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
      company={"mammoth"} 
      sitename={"Mary Price Compressor"} 
      date={data[0].mDate} 
      time={data[0].mTime}
    >
      <MobileDetails resourceType='PSI' isTable>
        <Table>
          <TableRow>
            <CellHeader>Suction</CellHeader>
            <CellData>{data[0].D0}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 1 Discharge</CellHeader>
            <CellData>{data[0].D1}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 1 Discharge</CellHeader>
            <CellData>{data[0].D2}</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 2 Discharge</CellHeader>
            <CellData>{data[0].D3}</CellData>
          </TableRow>
        </Table>
      </MobileDetails>
      
      <MobileDetails resourceType='RPM' isTable>
        <Table>
          <TableRow>
            <CellHeader>Motor VFD</CellHeader>
            <CellData>{data[0].D4}</CellData>
          </TableRow>
        </Table>
      </MobileDetails>
      
      <MobileDetails resourceType='Temp' isTable>
        <Table>
          <TableRow>
            <CellHeader>Discharge Cylinder #1</CellHeader>
            <CellData>{data[0].D5}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Discharge Cylinder #2</CellHeader>
            <CellData>{data[0].D6}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Discharge Cylinder #3</CellHeader>
            <CellData>{data[0].D7}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #1</CellHeader>
            <CellData>{data[0].D8}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #2</CellHeader>
            <CellData>{data[0].D9}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #3</CellHeader>
            <CellData>{data[0].D10}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #4</CellHeader>
            <CellData>{data[0].D11}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #5</CellHeader>
            <CellData>{data[0].D12}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Motor Winding #6</CellHeader>
            <CellData>{data[0].D13}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Stage 3 Suction</CellHeader>
            <CellData>{data[0].D14}&deg;</CellData>
          </TableRow>
          <TableRow>
            <CellHeader>Compressor Oil</CellHeader>
            <CellData>{data[0].D15}&deg;</CellData>
          </TableRow>
        </Table>
      </MobileDetails>
    </MobileLayout>
  </MobileView>
  </>
)

export async function getServerSideProps(ctx){
  const res1 = await fetch('http://jct-systems.com/api/mammoth')
  const res = await fetch('http://jct-systems.com/api/mammoth/mpc')
  
  const sites = await res1.json();
  const data = await res.json();
  
  return {
    props: { data, sites }
  }
} 


export default North