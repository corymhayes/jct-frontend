import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import NewLayout from '../../components/NewLayout'
import { useCompany, setCompany } from '../../components/CompanyProvider'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Start = ({ siteList, companyName }) => {
  const router = useRouter()
  const { name } = router.query
  console.log(name);
  return(
    <NewLayout 
      // sites={
      //   siteList.map(comp => (
      //     <ul>
      //       <li>
      //         <Link href={`${companyName}/${comp.BATTERY}`}>
      //           <a>{comp.BATTERY}</a>
      //         </Link>
      //       </li>
      //     </ul>
      //   ))
      // }
    />
  )
}



// export async function getServerSideProps(ctx){
//   const { name } = ctx.query
//   const res = await fetch(`http://localhost:3001/api/${name}`)
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { siteList: data, companyName: name}
//   }
// } 


export default Start