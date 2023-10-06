import './App.css';
import Navbar from './components/navbar';
import {chakra} from '@chakra-ui/react'
import TopRepo from './components/topRepo';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <chakra.div id='body'>
        <chakra.div className='left-part'
        display={['block','block','flex']}
        >
          <TopRepo/>
          <Home/>

        </chakra.div>
        <chakra.div className='right-part'>
          
          </chakra.div>

      </chakra.div>
     
    </div>
  );
}

export default App;
