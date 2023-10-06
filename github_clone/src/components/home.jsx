import React from 'react'
import {
  chakra, Heading, Box,
  Button,
  Text,
  Avatar,
  Tooltip,
  ButtonGroup,
  IconButton
} from '@chakra-ui/react'

import { BsFilter } from 'react-icons/bs'
import { IoTrendingUpOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai'
import Repo_tooltip from './repo_tooltip'
import { TriangleDownIcon } from '@chakra-ui/icons'
import Footer from './footer'


let trending = [
  {
    id: 1,
    reponame: 'arc53/DocsGPT',
    desc: 'GPT-powered chat for documentation, chat with your documents',
    star: '70k',
    public: true,
    updateon: 'Jul 20',
    techstack: 'Python',
    avatar: 'https://avatars.githubusercontent.com/u/103419759?s=88&v=4'
  },
  {
    id: 2,
    reponame: 'jbellis/jvector',
    desc: 'JVector: the most advanced embedded vector search engine',
    star: 252,
    public: true,
    updateon: 'May 20',
    techstack: 'Java',
    avatar: 'https://avatars.githubusercontent.com/u/42158?s=96&v=4'
  },

]


export default function Home() {
  return (
    <chakra.div
      padding={'16px 24px'}
      bg={'#161b22'}
      w={['full', 'full', '70%']}
      color={'white'}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        className='home-header'

      >
        <Heading fontSize={'20px'}>Home</Heading>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'12px'}
        >
          <chakra.a
            fontSize={'14px'}
            color={'blue'}
            cursor={'pointer'}
            _hover={{ textDecoration: 'underline' }}
          >Send feedback</chakra.a>
          <Button
            size={'xs'}
            color={'#8b949e'}
            bg={'#161b22'}
            border={'1px solid #30363d'}
            _hover={{ bg: '#21262d', border: '1px solid #8b949e' }}
            padding={'12px'}
            leftIcon={<BsFilter size={'16px'} />}
          >Filter</Button>
        </Box>
      </Box>
      <Box
        className='content'
        margin={'8px 0'}
        padding={'16px'}
        borderRadius={'6px'}
        border={'1px solid #30363d'}
        bg={'#21262d'}
      >
        <Box
          display={'flex'} color={'#8b949e'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'left'}

            gap={'8px'}
          >
            <IoTrendingUpOutline size='14px' />
            <Text>Treading repositories . </Text>
            <chakra.a
              fontSize={'14px'}
              color={'blue'}
              cursor={'pointer'}
              _hover={{ textDecoration: 'underline' }}
            >See more</chakra.a>
          </Box>
          <Text _hover={{ color: 'white' }}
            cursor={'pointer'}
          >...</Text>
        </Box>


        {/* Trending repositories */}

        {
          trending.map((el, ind) => {
            return <Box className='trending-repos'
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              p={'8px 0'} key={el.id} mb={'16px'} borderBottom={'1px solid #30363d'}>
              <Box
                w={'80%'}
                fontSize={'14px'}
              >
                <chakra.span display={'flex'} gap={'5px'} alignItems={'center'}>
                  <Avatar size='xs' name='Kent Dodds' src={el.avatar} />
                  <Tooltip label={<Repo_tooltip el={el} />} hasArrow placement='top-start'
                    margin={'0'}
                    padding={0}
                    bg={'#161b22'}
                    borderRadius={'6px'}
                  >
                    <Text fontSize={'14px'}
                      _hover={{ color: 'blue', textDecoration: 'underline' }}
                      cursor={'pointer'}
                    >{el.reponame}</Text></Tooltip>
                </chakra.span>
                <Text ml={'4px'} mt={'6px'}>{el.desc}</Text>
                <Box
                  mt={'4px'}
                  ml={'4px'}
                  display={'flex'}
                  gap={'12px'}
                  color={'#8b949e'}
                  alignItems={'center'}
                >
                  <Text fontSize={'12px'}>{el.techstack}</Text>
                  <chakra.span fontSize={'14px'}
                    display={'flex'}
                    alignItems={'center'}
                  ><AiOutlineStar /><span>{el.star}</span></chakra.span>
                </Box>
              </Box>
              <Box w={'20%'} display={'flex'} justifyContent={'right'}>
                <ButtonGroup size='sm' isAttached variant='outline'>
                  <Button
                    size={'xs'}
                    color={'#8b949e'}
                    bg={'#161b22'}
                    border={'1px solid #30363d'}
                    _hover={{ bg: '#21262d', border: '1px solid #8b949e' }}
                    padding={'12px'}
                    leftIcon={<AiOutlineStar />}>Star</Button>
                  <IconButton
                    size={'xs'}
                    color={'#8b949e'}
                    bg={'#161b22'}
                    border={'1px solid #30363d'}
                    _hover={{ bg: '#21262d', border: '1px solid #8b949e' }}
                    padding={'12px'}
                    aria-label='Add to friends' icon={<TriangleDownIcon height='8px' />} />
                </ButtonGroup>

              </Box>
            </Box>
          })
        }

      </Box>

      <Box className='footer' 
      mt={'18px'}
      >
        <Footer/>

      </Box>
    </chakra.div>
  )
}
