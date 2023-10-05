import React from 'react'
import {
    Box, chakra, Heading, InputGroup,

    Input,
    InputLeftElement,
    Button,
    Avatar
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, AddIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import { GoIssueOpened, GoGitPullRequest } from 'react-icons/go'
import { BiNotification } from 'react-icons/bi'

export default function Navbar() {
    let navcontent = [

        {
            id: 'issues',
            logo: GoIssueOpened
        },
        {
            id: 'pull-request',
            logo: GoGitPullRequest
        },
        {
            id: 'notification',
            logo: BiNotification
        }
    ]

    return (
        <Box
            id='navbar'
            color='#8b949e'
            display='flex'
            gap='8px'
            justifyContent='space-between' padding='16px' boxSizing='border-box' bg='#161b22' >
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
                ><HamburgerIcon /></chakra.div>
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
                >
                    <InputLeftElement >
                        <SearchIcon color='#8b949e' />
                    </InputLeftElement>
                    <Input w='350px' cursor='pointer' color='#8b949e' borderRadius='8px' border='1px solid #30363d ' placeholder='Type / to search' />

                </InputGroup>
                <chakra.span>|</chakra.span>
                <Button id='create-new' size='sm' bg='none'
                    color='#8b949e'

                    border='1px solid #30363d'
                    _hover={{ border: '1px solid #8b949e ', bg: '#21262d' }}
                    rightIcon={<TriangleDownIcon w='9px' />} ><AddIcon /></Button>

                {
                    navcontent.map((el, ind) => {
                        return <chakra.div id={el.id} key={el.id} padding='6px' cursor='pointer' w='32px' h='32px'
                            display='grid'
                            border='1px solid #30363d'
                            borderRadius='6px'
                            alignItems='center'
                            justifyContent='center'
                            _hover={{ border: '1px solid #8b949e ', bg: '#21262d' }}
                        >
                            <el.logo size={'18'} />
                        </chakra.div>
                    })
                }
                <Avatar id='avatar' cursor='pointer' size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </chakra.div>
        </Box>
    )
}
