import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './components/Add';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App