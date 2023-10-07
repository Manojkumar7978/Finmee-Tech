import { Box, chakra } from "@chakra-ui/react";
import Header from "./components/header";
import './App.css'
import Content from "./components/content";

function App() {
  return (
    <chakra.div className="App" maxW={'1200px'} margin={'auto'} >
      <Box h={'100vh'} bgImage={'url(https://news.microsoft.com/wp-content/uploads/prod/sites/66/2022/03/Screenshot-2022-03-04-150334.png)'} 
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      >
        <Box>
        <Header/>
        </Box>
        
      </Box>   
      <Content/>
    </chakra.div>
  );
}

export default App;
