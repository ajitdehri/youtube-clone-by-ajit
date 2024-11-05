import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import VideoId from './components/VideoId';
import Profilepage from './components/Profilepage';
import VideoUpload from './components/VideoUpload';
import SignUp from './components/SignUp';


function App() {
  const[sideNavbar,setSideNavbar]=useState(true);
  
  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }

  return (
    <>
    <div className='App'>
    <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
    <Routes>
      <Route path="/" element={ <Home sideNavbar={sideNavbar}/>}/>
      <Route path="/watch/:id" element={ <VideoId/>}/>
      <Route path="/user/:id" element={ <Profilepage/>}/>
      <Route path="/:id/upload" element={ <VideoUpload/>}/>
      <Route path="/signup" element={ <SignUp/>}/>
    </Routes>
   

    </div>
    </>
  )
}

export default App
