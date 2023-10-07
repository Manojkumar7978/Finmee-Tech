import { Box, chakra, Image,Text } from "@chakra-ui/react";
import Header from "./components/header";
import './App.css'
import Content from "./components/content";
import Footer from "./components/footer";
import Scrolltotop from "./components/scrolltotop";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from "react";

function App() {

  let ref = useRef()
  window.addEventListener('scroll', (e) => {
    window.scrollY > 200
      ? ref.current.style.display = 'flex'
      : ref.current.style.display = 'none'
    
  })

  return (
    <chakra.div className="App" maxW={'1200px'} margin={'auto'} >
      <Box className='fixed-nav'
        ref={ref}
        bg={'white'} zIndex={2} position={'sticky'} top={0} padding={'8px 16px'}
        display={'none'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Image m={'0 16px'} w={'118px'} h={'40px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png' />
        <Box display={'flex'} justifyContent={'space-between'}
          alignItems={'center'} m={'0 16px'}>
          <SearchIcon display={['inline-block','inline-block','none']}  cursor={'pointer'} color={'#7d4ac7'} w={'19px'} h={'18px'} />
          <Box display={['inline-block','inline-block','none']}  paddingLeft={'16px'}>

            <HamburgerIcon cursor={'pointer'} w={'20px'} h={'20px'} />
          </Box>
          <Box
                    display={['none','none','flex']} justifyContent={'space-between'}
                    alignItems={'center'} gap={5}
                    >
                    <Text color={'#003358'} cursor={'pointer'} 
                    fontWeight={'bold'}
                    _hover={{textDecoration:'underline'}}
                    fontSize={'15px'}>HOME</Text>
                     <Text color={'#003358'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>INDUSTRIES</Text>
                     <Text color={'#003358'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>AI SOFTWARE</Text>
                     <Text color={'#003358'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>BLOG</Text>
                     <Text color={'#003358'} cursor={'pointer'} 
                     fontWeight={'bold'}
                     _hover={{textDecoration:'underline'}}
                     fontSize={'15px'}>CONTACT US</Text>
                    </Box>
        </Box>
      </Box>

      <Box h={'100vh'} bgImage={'url(https://news.microsoft.com/wp-content/uploads/prod/sites/66/2022/03/Screenshot-2022-03-04-150334.png)'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        <Box>
          <Header />
        </Box>

      </Box>

      <Content />
      <Footer />
      <Scrolltotop />
    </chakra.div>
  );
}

export default App;
