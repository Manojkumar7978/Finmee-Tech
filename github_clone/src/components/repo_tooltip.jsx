import React from 'react'
import {
     chakra,
    Box,
    Text

} from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import {AiOutlineStar} from 'react-icons/ai'
export default function Repo_tooltip({ el }) {
    return (
        <chakra.div
            bg={'#161b22'}
            border={'1px solid #30363d'}
            padding={'12px'}
            borderRadius={'6px'}
            minW={'300px'}
            overflow={'hidden'}
        >
            <Box
            display={'flex'}
            justifyContent={'left'}
            alignItems={'center'}
            gap={'6px'}
            mb={'8px'}
            >
                {
                    el.public ? <RiGitRepositoryCommitsLine color='#8b949e' size={'16px'} /> : <LockIcon color='gold' />
                }
                <Text size={'sm'} noOfLines={1}>{el.reponame}</Text>
                <Box 
                border={'1px solid #30363d'}
                borderRadius={'10px'}
                fontSize={'12px'}
                textAlign={'center'}
                w={'60px'}
                color={'#8b949e'}>{
                    el.public ? 'Public' : 'Private'
                }</Box>
            </Box>
            <Text
            noOfLines={4}
            mb={'8px'}
            textAlign={'left'}
            fontSize={'12px'}
            color={'#8b949e'}
            >{el.desc}</Text>
            <Box
            mb={'8px'}
            display={'flex'}
            gap={'12px'}
            color={'#8b949e'}
            alignItems={'center'}
            >
                <Text fontSize={'12px'}>{el.techstack}</Text>
                <chakra.span fontSize={'14px'}
                display={'flex'}
                alignItems={'center'}
                ><AiOutlineStar/><span>{el.star}</span></chakra.span>
                <Text fontSize={'12px'}>{`Updated on ${el.updateon}`}</Text>

            </Box>
        </chakra.div>
    )
}
