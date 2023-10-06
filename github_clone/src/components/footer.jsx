import React from 'react'
import { chakra, Box, Text } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
export default function Footer() {
    return (
        <chakra.div display={'flex'} justifyContent={'flex-start'}>
            <Box display={['none','flex','flex']}
                w={'40%'}
                gap={'5px'}
                color='#8b949e' _hover={{ color: '#c9d1d9' }} cursor={'pointer'} >
                <BsGithub size={'22px'} />
                <Text fontSize={'10px'}>© 2023 GitHub, Inc.</Text>
            </Box>
            <Box display={'flex'} gap={'50px'}>
                <Box fontSize={'12px'} color={'#8b949e'} display={'grid'} gap={'5px'}>
                    <Text
                        _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}
                    >Blog</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>About</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Shop</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Contact GitHub</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Pricing</Text>
                </Box>
                <Box fontSize={'12px'} color={'#8b949e'} display={'grid'} gap={'5px'}>
                    <Text
                        _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}
                    >Api</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Training</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Status</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Security</Text>
                </Box>
                <Box fontSize={'12px'} color={'#8b949e'} display={'grid'} gap={'5px'}>
                    <Text
                        _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}
                    >Terms</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Privacy</Text>
                    <Text _hover={{ color: 'blue', textDecoration: 'underline' }}
                        cursor={'pointer'}>Docs</Text>
                   
                </Box>

            </Box>


        </chakra.div>

    )
}
