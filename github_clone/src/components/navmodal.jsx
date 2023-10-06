import { useState } from 'react'
import { chakra, Box, Text, Avatar } from '@chakra-ui/react'
import { AiOutlineHome, AiOutlineGift, AiOutlineSearch } from 'react-icons/ai'
import {
    GoIssueOpened, GoGitPullRequest, GoCommentDiscussion,
    GoCodespaces
} from 'react-icons/go'
import { FaWpexplorer } from 'react-icons/fa'
import { repos, otherrepos } from './topRepo'
import {RiFeedbackLine} from 'react-icons/ri'

let data1 = [
    {
        text: 'Home',
        img: AiOutlineHome
    },
    {
        text: 'Issues',
        img: GoIssueOpened
    },
    {
        text: 'Pullrequests',
        img: GoGitPullRequest
    },
    {
        text: 'Discussions',
        img: GoCommentDiscussion
    },
    {
        text: 'Codespaces',
        img: GoCodespaces
    },
]
let data2 = [
    {
        text: 'Explore',
        img: FaWpexplorer
    },
    {
        text: 'Marketplace',
        img: AiOutlineGift
    },
]

export default function Navmodal() {
    let [toogle, setToogle] = useState(false)

    return (
        <chakra.div >
            <Box overflow={'auto'} h={'75vh'} padding={'8px'}>
                <Box pb={'16px'} borderBottom={'1px solid #30363d'}>
                    {
                        data1.map((el, ind) => {
                            return <Box
                                display={'flex'} alignItems={'center'}
                                padding={'6px 8px'}
                                gap={'6px'}
                                _hover={{ bg: '#30363d' }}
                                borderRadius={'6px'}
                                cursor={'pointer'}
                            >
                                <el.img size={'16px'} color='#8b949e' />
                                <Text fontSize={'12px'}>{el.text}</Text>
                            </Box>
                        })
                    }
                </Box>
                <Box pb={'16px'} borderBottom={'1px solid #30363d'}>
                    {
                        data2.map((el, ind) => {
                            return <Box
                                display={'flex'} alignItems={'center'}
                                padding={'6px 8px'}
                                gap={'6px'}
                                _hover={{ bg: '#30363d' }}
                                borderRadius={'6px'}
                                cursor={'pointer'}
                            >
                                <el.img size={'16px'} color='#8b949e' />
                                <Text fontSize={'12px'}>{el.text}</Text>
                            </Box>
                        })
                    }
                </Box>
                <Box borderBottom={'1px solid #30363d'} pb={'16px'} mt={'8px'} >
                    <chakra.div padding={'6px 8px'} display={'flex'} color={'#8b949e'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={'12px'} >Repositories</Text>
                        <AiOutlineSearch />
                    </chakra.div>
                    <chakra.div  >
                        {

                            repos.map((el, ind) => {
                                return <>

                                    <chakra.div
                                        padding={'6px 8px'}
                                        _hover={{ bg: '#30363d' }}
                                        borderRadius={'6px'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'left'}
                                        gap={'6px'}
                                        cursor={'pointer'}
                                    >
                                        <Avatar size='2xs' name={el.reponame} src={el.avatar} />
                                        <chakra.a color={'white'}
                                            fontSize={'12px'}


                                        >{el.reponame}</chakra.a>
                                    </chakra.div>
                                </>
                            })
                        }
                        {

                            toogle ? otherrepos.map((el, ind) => {
                                return <>

                                    <chakra.div
                                        padding={'6px 8px'}
                                        _hover={{ bg: '#30363d' }}
                                        borderRadius={'6px'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'left'}
                                        gap={'6px'}
                                        cursor={'pointer'}
                                    >
                                        <Avatar size='2xs' name={el.reponame} src={el.avatar} />
                                        <chakra.a color={'white'}
                                            fontSize={'12px'}


                                        >{el.reponame}</chakra.a>
                                    </chakra.div>                                </>
                            })
                                :
                                <>
                                    <Text mt={'16px'}
                                        color={'#8b949e'}
                                        fontSize={'12px'}
                                        _hover={{ color: '#58a6ff' }}
                                        cursor={'pointer'}
                                        onClick={() => {
                                            setToogle(!toogle)
                                        }}
                                    >Show more</Text>
                                </>
                        }
                    </chakra.div>
                </Box>
                <Box borderBottom={'1px solid #30363d'} pb={'16px'} mt={'8px'} >
                    <chakra.div padding={'6px 8px'} display={'flex'} color={'#8b949e'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={'12px'} >Teams</Text>
                        <AiOutlineSearch />
                    </chakra.div>
                    <chakra.div
                        padding={'6px 8px'}
                        _hover={{ bg: '#30363d' }}
                        borderRadius={'6px'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'left'}
                        gap={'6px'}
                        cursor={'pointer'}
                    >
                        <Avatar size='2xs' name={'Teams'} src={'https://avatars.githubusercontent.com/u/103419759?s=88&v=4'} />
                        <chakra.a color={'white'}
                            fontSize={'12px'}
                        >TeamsReponame</chakra.a>
                    </chakra.div>
                </Box>
            </Box>
            <Box
            borderTop={'1px solid #30363d'}
            pt={'4px'}
            >

                <Box
                    display={'flex'} alignItems={'center'}
                    padding={'6px 8px'}
                    gap={'6px'}
                    _hover={{ bg: '#30363d' }}
                    borderRadius={'6px'}
                    cursor={'pointer'}
                    
                >
                    <RiFeedbackLine size={'16px'} color='#8b949e' />
                    <Text size={'12px'}>Give new navigation feedback</Text>
                </Box>
                <Text color='#8b949e' ml={'6px'} fontSize={'10px'}>© 2023 GitHub, Inc.</Text>
                <Box color={'blue'} ml={'6px'}  fontSize={'12px'} display={'flex'}
                flexWrap={'wrap'}
                gap={'6px'}>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>About</Text>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>Blog</Text>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>Terms</Text>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>Privacy</Text>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>Security</Text>
                    <Text  cursor={'pointer'}  _hover={{textDecoration:'underline'}}>Status</Text>
                </Box>
            </Box>

        </chakra.div>
    )
}
