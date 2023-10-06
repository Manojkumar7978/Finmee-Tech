import {useState} from 'react'
import {
    chakra, Box,
    Menu,
    MenuButton,
    MenuList,
    Avatar,
    MenuOptionGroup,
    MenuItem,
    Heading,
    Button,
    Input,
    Text
} from '@chakra-ui/react'
import { AddIcon, CheckIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { GoOrganization } from 'react-icons/go'
import {RiGitRepositoryCommitsLine } from 'react-icons/ri'
import Repo from './repo'

export let repos=[
    {
        id:1,
        reponame:'username1/repo1',
        desc:'Some Desc....',
        star:2,
        public:true,
        updateon:'Jul 20',
        techstack:'Javascript',
        avatar:'https://bit.ly/dan-abramov'
    },
    {
        id:2,
        reponame:'username2/repo2',
        desc:'Some Desc....',
        star:1,
        public:false,
        updateon:'May 20',
        techstack:'HTML',
        avatar:'https://bit.ly/kent-c-dodds'
    },
    {
        id:3,
        reponame:'username3/repo3',
        desc:'Some Desc....',
        star:4,
        public:true,
        updateon:'Jan 22',
        techstack:'HTML',
        avatar:'https://bit.ly/dan-abramov'
    },
    {
        id:4,
        reponame:'username4/repo4',
        desc:'Some Desc....',
        star:20,
        public:true,
        updateon:'Jan 23',
        techstack:'Python',
        avatar:'https://bit.ly/kent-c-dodds'
    },
    {
        id:5,
        reponame:'username5/repo5',
        desc:'Some Desc....',
        star:15,
        public:true,
        updateon:'Mar 20',
        techstack:'C++',
        avatar:'https://bit.ly/kent-c-dodds'
    },
    {
        id:6,
        reponame:'username6/repo6',
        desc:'Some Desc....',
        star:16,
        public:true,
        updateon:'Mar 20',
        techstack:'C#',
        avatar:'https://bit.ly/kent-c-dodds'
    },
    {
        id:7,
        reponame:'username7/repo7',
        desc:'Some Desc....',
        star:21,
        public:true,
        updateon:'Dec 20',
        techstack:'Java',
        avatar:'https://bit.ly/kent-c-dodds'
    },
    
]
export let otherrepos=[
    {
        id:8,
        reponame:'username8/repo8',
        desc:'Some Desc....',
        star:22,
        public:false,
        updateon:'May 20',
        techstack:'Java',
        avatar:'https://bit.ly/kent-c-dodds'
    },
]

export default function TopRepo() {
    let[toogle,setToogle]=useState(false)


    return (
        <chakra.div bg={'#161b22'}
            h={['auto','auto','90vh']}
            overflow={'auto'}
            padding={'16px 24px 0 24px'}
            w={['100%','100%','30%']}
        >
            <Box className='toprepo-header' mb='8px' padding='16px 0'>
                <Menu colorScheme='white' >
                    <MenuButton rightIcon={<TriangleDownIcon />}>
                        <Avatar size='xs' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <chakra.span
                            color={'white'}
                            m={'0 5px'}
                        >Username<chakra.span><TriangleDownIcon ml={'5px'} boxSize={2} /></chakra.span></chakra.span>
                    </MenuButton>
                    <MenuList m={'8px 0'}
                        w={'300px'}
                        h={'auto'}
                        maxH={'480px'}
                        fontSize={'16px'}
                        border={'1px solid #30363d'}
                        borderRadius={'6px'}
                        boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
                        bg={'#161b22'}
                    >
                        <MenuOptionGroup title='Switch dashboard context' color={'white'}
                            m={'0'} p={'7px 16px'} fontSize={'12px'}
                            borderBottom={'1px solid #30363d'}
                        >
                            <MenuItem bg={'#161b22'}
                                fontSize={'12px'}
                                fontWeight={'500'}
                                padding={'7px 16px'}
                                display={'flex'}
                                justifyContent={'left'}
                                alignItems={'center'}
                                gap={'10px'}
                                color={'white'}
                                borderBottom={'1px solid #30363d'}
                            >

                                <CheckIcon />
                                <Avatar size='xs' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                <chakra.span>Username</chakra.span>

                            </MenuItem>
                            <MenuItem bg={'#161b22'}
                                fontSize={'12px'}
                                fontWeight={'500'}
                                padding={'7px 16px'}
                                display={'flex'}
                                justifyContent={'left'}
                                alignItems={'center'}
                                gap={'10px'}
                                color={'white'}
                                borderBottom={'1px solid #30363d'}
                            >

                                <GoOrganization size={'16px'} />
                                <chakra.span>Manage organisation</chakra.span>

                            </MenuItem>
                            <MenuItem bg={'#161b22'}
                                fontSize={'12px'}
                                fontWeight={'500'}
                                padding={'7px 16px'}
                                display={'flex'}
                                justifyContent={'left'}
                                alignItems={'center'}
                                gap={'10px'}
                                color={'white'}
                            >

                                <AddIcon size={'16px'} />
                                <chakra.span>Create organisation</chakra.span>

                            </MenuItem>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>

            </Box>

            <Box id='top-repo' >
                <chakra.header
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                color={'white'}
                mb={'4px'}
                >
                    <Heading  fontSize={'14px'}>Top Repositories</Heading>
                    <Button bg='#006d32'
                    _hover={{bg:'#26a641'}}
                    color={'white'}
                    fontSize={'0.75rem'}
                    size={'sm'}
                    padding={'0 8px'}
                    leftIcon={<RiGitRepositoryCommitsLine size='16px' />}
                    >New</Button>
                    
                </chakra.header>
                <Input id='search-repo'
                onFocus={()=>{
                    setToogle(true)
                }}
                placeholder='Find a repository...' size='sm'
                border={'1px solid #30363d'}
                borderRadius={'6px'}
                mb={'16px'}
                bg={'#161b22'}
                color={'white'}
                padding={'5px 12px'}
                mt={'4px'}
                />

                <Box className='repos'>
                    {
                        
                        repos.map((el,ind)=>{
                            return <>
                            
                                <Repo el={el} ind={ind} toogle={toogle} />
                            </>
                        })
                    }
                    {
                        
                        toogle ? otherrepos.map((el,ind)=>{
                            return <>
                            
                                <Repo el={el} ind={ind} toogle={toogle} />
                            </>
                        })
                        :
                        <>
                        <Text mt={'16px'}
                        color={'#8b949e'}
                        fontSize={'12px'}
                        _hover={{color:'#58a6ff'}}
                        cursor={'pointer'}
                        onClick={()=>{
                            setToogle(!toogle)
                        }}
                        >Show more</Text>
                        </>
                    }


                </Box>
              
            </Box>


            <Box className='toprepo-footer'>
                <chakra.div 
                color={'white'}
                fontSize={'14px'}
                mt={'24px'}
                >Recent activity</chakra.div>
                <chakra.div
                border={'1px dashed #30363d '}
                padding={'16px'}
                mt={'8px'}
                borderRadius={'6px'}
                color={'#8b949e'}
                fontSize={'12px'}
                >
                When you take actions across GitHub, we’ll provide links to that activity here.     
                </chakra.div>
                <chakra.div 
                color={'white'}
                fontSize={'14px'}
                mt={'24px'}
                mb={'4px'}
                >Yours teams</chakra.div>
                <Input placeholder='Find a team'
                color={'white'}
                size={'sm'}
                border={'1px solid #30363d'}
                borderRadius={'6px'}
                padding={'5px 12px'}
                mb={'16px'}
                ></Input>
            </Box>


        </chakra.div>
    )
}
