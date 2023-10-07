import { React, useEffect } from 'react'
import { chakra, Box,
    Text,
    Image, Heading, Button } from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'


export default function Header() {

    return (
        <chakra.div>
            <Box className='nav-section' padding={'8px 16px'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Image m={'0 16px'} w={'118px'} h={'40px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                <Box display={'flex'} justifyContent={'space-between'}
                    alignItems={'center'} m={'0 16px'}
                
                    >
                    <SearchIcon display={['inline-block','inline-block','none']} cursor={'pointer'} color={'#7d4ac7'} w={'19px'} h={'18px'} />
                    <Box display={['inline-block','inline-block','none']} paddingLeft={'16px'}>

                        <HamburgerIcon cursor={'pointer'} w={'20px'} h={'20px'} />
                    </Box>
                    <Box
                    display={['none','none','flex']} justifyContent={'space-between'}
                    alignItems={'center'} gap={5}
                    >
                    <Text color={'white'} cursor={'pointer'} 
                    fontWeight={'bold'}
                    _hover={{textDecoration:'underline'}}
                    fontSize={'15px'}>HOME</Text>
                     <Text color={'white'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>INDUSTRIES</Text>
                     <Text color={'white'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>AI SOFTWARE</Text>
                     <Text color={'white'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>BLOG</Text>
                     <Text color={'white'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>CONTACT US</Text>
                    </Box>
                </Box>
            </Box>




            <Box
                position={'relative'}
                left={'50%'}
                maxW={'1200px'}
                W={'90vw'}
                transform={['translate(-50%, 10%)', 'translate(-50%, 10%)', 'translate(-50%, 30%)']}
                display={['block', 'block', 'flex']}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'30px'}
            >
                <Box w={'100%'} padding={'20px'} color={'white'}>
                    <Box className='fadeup-text'>
                        <Heading fontSize={['22px', '30px', '35px']}>Data-powered solutions</Heading>
                        <Heading fontSize={['22px', '30px', '35px']}>for Industrial Excellence</Heading>
                    </Box>
                    <Button colorScheme='blue' fontSize={'10px'} size={'sm'}
                        padding={'0 20px'}
                        h={'25px'}
                        mt={''}
                    >Read More</Button>
                </Box>
                <Box>
                    <Image maxW={['auto', 'auto', 'auto']} w={'auto'} src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' />
                </Box>
            </Box>

        </chakra.div>
    )
}
