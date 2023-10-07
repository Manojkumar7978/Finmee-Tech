import React from 'react'
import { Heading, Text, chakra,Box, Button, Image } from '@chakra-ui/react'

export default function Cardright({el}) {
  return (
    <chakra.div
    display={['block','block','flex']}
    alignItems={'center'}
    >
        <Box w={['100%','100%','50%']} padding={'32px'}>
       <Image src={el.url}/>
       </Box>
        <Box w={['100%','100%','50%']}> 
            <Heading
            fontSize={'43px'}
            color={'#ff3a2d'}
            maxW={'450px'}
            >{el.heading}</Heading>
            <Text margin={'15px 0'} fontSize={'16px'}
            textAlign={'justify'}
            >{el.desc}</Text>
             <Text margin={'15px 0'} fontSize={'16px'}
            textAlign={'justify'}
            >{el.desc2}</Text>
            <Button bg={'#ff3a2d'} color={'white  '} padding={'12px 24px'} 
            borderRadius={'3px'}
            fontSize={'15px'} >Read More</Button>
        </Box>
       
       
      
    </chakra.div>
  )
}
