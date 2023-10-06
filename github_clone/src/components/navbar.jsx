import React from 'react'
import {
    Box, chakra, Heading, InputGroup,
    Input,
    InputLeftElement,
    Button,
    Avatar,
    Tooltip,
    Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
    useDisclosure,
    DrawerCloseButton
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, AddIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import { GoIssueOpened, GoGitPullRequest } from 'react-icons/go'
import { BiNotification } from 'react-icons/bi'
import Navmodal from './navmodal'
import Usermodal from './usermodal'


export default function Navbar() {
    let navcontent = [

        {
            id: 'issues',
            logo: GoIssueOpened,
            display: ['none', 'grid', 'grid'],
            tooltip: 'Issues'
        },
        {
            id: 'pull-request',
            logo: GoGitPullRequest,
            display: ['none', 'grid', 'grid'],
            tooltip: 'Pull requests'
        },
        {
            id: 'notification',
            logo: BiNotification,
            display: 'grid',
            tooltip: 'You have unread notifications'
        }
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box
            id='navbar'
            color='#8b949e'
            display='flex'
            gap='8px'
            justifyContent='space-between' padding='16px'
            borderBottom={'1px solid #30363d'}
            boxSizing='border-box' bg='#161b22' >
            {/* navbar-leftside  */}
            <chakra.div id='nav-left' display='flex' w='full' alignItems='center' gap='8px'>
                <chakra.div id='ham_menu' padding='6px' h={'32px'}
                    w={'32px'}
                    borderRadius='0.375rem'
                    border='1px solid #30363d'
                    display='grid'
                    alignItems='center'
                    justifyContent='center'
                    cursor='pointer'
                    _hover={{ border: '1px solid #8b949e' }}
                ><HamburgerIcon onClick={onOpen} />

{/* navigation drawer */}
                    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}
                    >
                        <DrawerOverlay color={'white'} />
                        <DrawerContent borderRadius={'10px'} bg={'#161b22'} color={'white'}>
                            <DrawerHeader >
                                <DrawerCloseButton size={'sm'} color={'#8b949e'} _hover={{ color: 'white' }} bg={'#30363d'} />
                                <chakra.div id='github_logo' display='grid'
                                    cursor='pointer'
                                    alignItems='center'
                                    justifyContent='center'
                                    h='32px'
                                    w='32px'
                                ><BsGithub color='white' size={'32px'} />
                                </chakra.div>
                            </DrawerHeader>
                            <DrawerBody padding={'8px'}>
                                <Navmodal />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>




                </chakra.div>
                <chakra.div id='github_logo' display='grid'
                    cursor='pointer'
                    alignItems='center'
                    justifyContent='center'
                    h='32px'
                    w='32px'
                ><BsGithub color='white' size={'32px'} />
                </chakra.div>
                <chakra.div id='dashboard' w='full'  >
                    <chakra.a display='grid'
                        textAlign='left'
                        alignItems='center'
                        borderRadius='6px'
                        h='48px'

                        _hover={{ bg: '#21262d' }}
                        cursor='pointer'
                        color='white'
                    ><Heading size='xs' noOfLines={1} padding='6px'>Dashboard</Heading></chakra.a>
                </chakra.div>
            </chakra.div>
            {/* navbar-rightside  */}
            <chakra.div id='nav-right' display='flex'
                gap='8px'
                alignItems='center'
                justifyContent='right'
            >
                <InputGroup
                    id='search-bar'
                    color='#8b949e'
                    size='sm'
                    cursor='pointer'
                    display={['none', 'none', 'block']}
                >
                    <InputLeftElement >
                        <SearchIcon color='#8b949e' />
                    </InputLeftElement>
                    <Input w='300px' cursor='pointer' color='#8b949e' borderRadius='8px' border='1px solid #30363d ' placeholder='Type / to search' />

                </InputGroup>
                <chakra.span display={['none', 'none', 'block']}>|</chakra.span>
                <Tooltip bg='#6e7681' color='white' hasArrow label={'Create new...'} placement='bottom' borderRadius='6px' fontSize='11px'>
                    <Button id='create-new' display={['none', 'flex', 'flex']} size='sm' bg='none'
                        color='#8b949e'

                        border='1px solid #30363d'
                        _hover={{ border: '1px solid #8b949e ', bg: '#21262d' }}
                        rightIcon={<TriangleDownIcon w='9px' />} ><AddIcon /></Button>

                </Tooltip>
                {
                    navcontent.map((el, ind) => {
                        return <Tooltip bg='#6e7681' color='white' key={el.id} hasArrow label={el.tooltip} placement='bottom' borderRadius='6px' fontSize='11px'>
                            <chakra.div display={el.display} id={el.id} padding='6px' cursor='pointer' w='32px' h='32px'
                                border='1px solid #30363d'
                                borderRadius='6px'
                                alignItems='center'
                                justifyContent='center'
                                _hover={{ border: '1px solid #8b949e ', bg: '#21262d' }}
                            >

                                <el.logo size={'18'} />

                            </chakra.div>
                        </Tooltip>
                    })
                }
                <Usermodal/>
            </chakra.div>
        </Box>
    )
}
