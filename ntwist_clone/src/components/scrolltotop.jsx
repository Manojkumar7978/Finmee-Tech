import React, { useRef } from 'react'
import { chakra, Box } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

export default function Scrolltotop() {
    let ref = useRef()
    window.addEventListener('scroll', (e) => {
            window.scrollY > 200
            ? ref.current.style.display = 'inline-block'
            : ref.current.style.display = 'none'
    })

    return (
        <chakra.div
            justifyContent={'flex-end'}
            mr={5}
            bg={'transparent'}
            position={'fixed'}
            zIndex={10}
            bottom={10}
            right={0}
            
            ref={ref}
        >
            <Box display={'flex'}
                w={'50px'}
                h={'50px'}
                borderRadius={'50%'}
                bg={'#003353'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={() => {
                    window.scrollTo({ top:0,left:0, behavior: 'smooth' })
                }}
                className='scrolltotop'

            >
                <ChevronUpIcon cursor={'pointer'} color={'white'} w={7} h={7} />
            </Box>

        </chakra.div>
    )
}
