import { BrowserRouter, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import Header from './component/Header/Header.js';
import SimpleBottomNavigation from './component/Nav/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
    
    <Header/>
    
    <div className="app">
       <Container>
  <Routes>
    <Route path='/' element={<Trending/>} exact />
    <Route path='/movies' element={<Movies/>} />
    <Route path='/series' element={<Series/>}/>
    <Route path='/search' element={<Search/>}/>
  </Routes>
      </Container></div>

    
       <SimpleBottomNavigation />
    

  
    </BrowserRouter>
   
  );
}

export default App;
