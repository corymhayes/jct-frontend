import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import MobileLayout from '../../components/MobileLayout' 
import Details from '../../components/Details'


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
                  mon={equip.monValue}
                  tue={equip.tueValue}
                  wed={equip.wedValue}
                  thu={equip.thuValue}
                  fri={equip.friValue}
                  sat={equip.satValue}
                  sun={equip.sunValue}
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
                  mon={equip.monValue}
                  tue={equip.tueValue}
                  wed={equip.wedValue}
                  thu={equip.thuValue}
                  fri={equip.friValue}
                  sat={equip.satValue}
                  sun={equip.sunValue}
                />
              ))
            }
          </Layout>
      }
    </>
  )
}

export async function getServerSideProps(ctx){
  const { name, site } = ctx.params
  const res = await fetch(`http://jct-systems.com/api/${name}/${site}`);
  const json = await res.json();

  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)


  if(isMobileView < 0){
    return {
      props: {
        isMobileView: false,
        equipment: json[1]
      }
    }
  } else {
    return {
      props: {
        isMobileView: true,
        equipment: json[1]
      }
    }
  }

}

export default Home
