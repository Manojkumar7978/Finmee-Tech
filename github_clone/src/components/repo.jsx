import React from 'react'
import { Avatar,  chakra,Tooltip } from '@chakra-ui/react'
import Repo_tooltip from './repo_tooltip.jsx'

export default function Repo({el,ind}) {
  return (
    <chakra.div mt={'8px'}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'left'}
    gap={'6px'}
    cursor={'pointer'}
    >
      <Tooltip label={<Repo_tooltip el={el}/>} hasArrow  placement='top-end'
      margin={'0'}
      padding={0}
      bg={'#161b22'}
      borderRadius={'6px'}
      >
        <Avatar size='2xs' name={el.reponame} src={el.avatar} />
        </Tooltip>
        <Tooltip label={<Repo_tooltip el={el}/>} hasArrow  placement='top-end'
      margin={'0'}
      padding={0}
      bg={'#161b22'}
      borderRadius={'6px'}
      >
        <chakra.a color={'white'} 
        fontSize={'16px'}
        _hover={{textDecoration:'underline'}}
       
        >{el.reponame}</chakra.a>
        </Tooltip>
      
    </chakra.div>
  )
}
