import React from 'react'
import { Box, Image, chakra, Text, IconButton } from '@chakra-ui/react'
import { AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <chakra.div paddingTop={'72px'} bg={'#021528'}>
            <Box padding={'0 16px'} pb={'32px'} display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Image w={'120px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                <Box color={'white'} display={'flex'} gap={'20px'}
                alignItems={'center'}
                justifyContent={'center'}
                flexWrap={'wrap'}>
                    <Text fontSize={'16px'}>Home</Text>
                    <Text fontSize={'16px'}>About Us</Text>
                    <Text fontSize={'16px'}>Contact Us</Text>
                    <Text fontSize={'16px'}>Privacy Policy</Text>
                    <Text fontSize={'16px'}>Sitemap</Text>
                </Box>
                <Text textAlign={'center'} fontSize={'15px'} m={'15px 0'} color={'#6f7f92'}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
                <Box>
                    <IconButton
                        bg='#0c1330'
                        color={'white'}
                        _hover={{ bg: '#003358' }}
                        aria-label='Search database'
                        icon={<AiOutlineTwitter size={'24px'} />}
                        mr={'10px'}
                    />
                    <IconButton
                        bg='#0c1330'
                        color={'white'}
                        _hover={{ bg: '#003358' }}
                        aria-label='Search database'
                        icon={<AiFillLinkedin size={'24px'} />}
                    />
                </Box>
                <Text fontSize={'15px'} m={'15px 0'} color={'#6f7f92'}>© 2022. Ntwist Inc.</Text>

            </Box>

        </chakra.div>
    )
}
