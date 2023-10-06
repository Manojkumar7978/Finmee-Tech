import React from 'react'
import { chakra,Avatar,Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
    useDisclosure,
    DrawerCloseButton ,Box,Text} from '@chakra-ui/react'
    import { BsGithub } from 'react-icons/bs'
    import {CgProfile,CgOrganisation} from 'react-icons/cg'
    import {RiGitRepositoryLine,RiCopilotFill} from 'react-icons/ri'
    import {AiOutlineProject,AiOutlineGlobal,AiOutlineStar,AiOutlineSetting} from 'react-icons/ai'
import {SiGithubsponsors} from 'react-icons/si'
import {VscGist} from 'react-icons/vsc'
import {GrUpgrade} from 'react-icons/gr'
import {SlChemistry,SlDocs} from 'react-icons/sl'
import {MdOutlineSupportAgent} from  'react-icons/md'
    let data1= [
        {
            text: 'Your profile',
            img: CgProfile
        },
    ]
    let data2= [
        {
            text: 'Your repositories',
            img: RiGitRepositoryLine
        },
        {
            text: 'Your projects',
            img: AiOutlineProject
        },
        {
            text: 'Your organisations',
            img: CgOrganisation
        },
        {
            text: 'Your enterprises',
            img: AiOutlineGlobal
        },
        {
            text: 'Your stars',
            img: AiOutlineStar
        },
        {
            text: 'Your sponsors',
            img: SiGithubsponsors
        },
        {
            text: 'Your gists',
            img: VscGist
        },
    ]
    let data3= [
        {
            text: 'Upgrade',
            img: GrUpgrade
        },
        {
            text: 'Try Enterprise',
            img: AiOutlineGlobal
        },
        {
            text: 'Copilot',
            img: RiCopilotFill
        },
        {
            text: 'Feature Preview',
            img: SlChemistry
        },
        {
            text: 'Setting',
            img: AiOutlineSetting
        },
    ]
    let data4= [
        {
            text: 'GitHub Docs',
            img: SlDocs
        },
        {
            text: 'GitHub Support',
            img: MdOutlineSupportAgent
        },
        
    ]
export default function Usermodal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <chakra.div>
        <Avatar id='avatar' cursor='pointer' size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' onClick={onOpen} />
        <Drawer  placement={'right'} onClose={onClose} isOpen={isOpen}
                    >
                        <DrawerOverlay color={'white'} />
                        <DrawerContent borderRadius={'10px'} bg={'#161b22'} color={'white'}>
                            <DrawerHeader >
                                <DrawerCloseButton size={'sm'} color={'#8b949e'} _hover={{ color: 'white' }} bg={'#30363d'} />
                                <chakra.div id='github_logo' display='flex'
                                    cursor='pointer'
                                    alignItems='flex-start'
                                    justifyContent='left'
                                    h='32px'
                                    gap={'6px'}
                                >
                                 <Avatar id='avatar' cursor='pointer' size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  />
                                 <Box fontSize={'12px'} textAlign={'left'}>
                                    <Text>Username</Text>
                                    <Text color={'#8b949e'}>Kent Dodds</Text>
                                 </Box>
                                </chakra.div>
                            </DrawerHeader>
                            <DrawerBody padding={'8px'}>
                                {/* all content */}
                                <Box borderBottom={'1px solid #30363d'} p={'6px 0'}>
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
                                <Box borderBottom={'1px solid #30363d'} p={'6px 0'}>
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
                                <Box borderBottom={'1px solid #30363d'} p={'6px 0'}>
                                {
                        data3.map((el, ind) => {
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
                                <Box borderBottom={'1px solid #30363d'} p={'6px 0'}>
                                {
                        data4.map((el, ind) => {
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
                                <Box  p={'6px 0'}>
                                <Box
                                display={'flex'} alignItems={'center'}
                                padding={'6px 8px'}
                                gap={'6px'}
                                _hover={{ bg: '#30363d' }}
                                borderRadius={'6px'}
                                cursor={'pointer'}
                                
                            >
                                
                                <Text fontSize={'12px'}>Sign Out</Text>
                            </Box>
                  
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
    </chakra.div>
  )
}
