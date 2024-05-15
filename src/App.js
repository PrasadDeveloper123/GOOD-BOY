import logo from './logo.svg';

import './App.css';

import Rowone from './Components/Rowone';
import Home from './Components/Home';
import Cancel from './Components/Cancel';
import Track from './Components/Track';
import Time from './Components/Time';
import Gallery from './Components/Gallery';
import Change from './Change';
import Table from './Components/Table';


import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Ticketlogin from './Components/Ticketlogin';


import OPrlogin from './Components/Oprlogin';



function App() {
  return (
    <div className='xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px'>
      <p className="a">h</p>
      
      

      <BrowserRouter>
      
      <Rowone></Rowone>
      
      

      <Routes>
        <Route path="/ticket" element={<Ticketlogin/>}></Route>
        
        <Route path="/opr" element={<OPrlogin/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cancel" element={<Cancel/>}></Route>
        <Route path="/track" element={<Track/>}></Route>
        <Route path="/time" element={<Time/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
      
      
      </BrowserRouter>

      <Table></Table>
      
      





    </div>
    
  );
}

export default App;
