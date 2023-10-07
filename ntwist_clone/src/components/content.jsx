import React from 'react'
import { chakra } from '@chakra-ui/react'
import Cardleft from './cardleft'

let data=[
  {
    id:1,
    desc:'NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.',
    url:'https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-1024x683.jpg',
    heading:'Mine-To-Mill-To-Mine Optimization'
  },
  {
    id:2,
    desc:'Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.',
    desc2:'With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.',
    url:'https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575-1024x576.jpg',
    heading:'Sustainability'
  },
  {
    id:3,
    desc:'NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.',
    url:'https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283-1024x683.jpg',
    heading:'Mineral Processing' 
   },
  {
    id:4,
    desc:'Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.',
    desc2:'Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.',
    url:'https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884-1024x681.png',
    heading:'Oil & Gas'
  },
]

export default function Content() {
  return (
    <chakra.div padding={'16px'} position={'initial'}>
      {
        data.map((el,ind)=>{
            return ind%2==1 ? <></> : <>
            <Cardleft el={el}/>
            </>
        })
      }

      
    </chakra.div>
  )
}
