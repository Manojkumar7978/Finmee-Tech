import React from 'react'
import { Heading, Text, chakra,Box, Button } from '@chakra-ui/react'

export default function Cardleft({el}) {
  return (
    <chakra.div>
        <Box>
            <Heading
            fontSize={'43px'}
            color={'#ff3a2d'}
            maxW={'450px'}
            >{el.heading}</Heading>
            <Text margin={'15px 0'} fontSize={'16px'}
            textAlign={'justify'}
            >{el.desc}</Text>
            <Button bg={'#ff3a2d'} color={'white'} padding={'12px 24px'} >Read More</Button>
        </Box>
      
    </chakra.div>
  )
}
