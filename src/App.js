

import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogList from './components/BlogList';
import Home from './components/Home';
import BlogContents from './components/BlogContents';


function App() {
  return (
    <>
     <Home/>
    

    <Routes element={<Home/>}>
      {/* <Route path='' element={<Home/>} /> */}
      <Route path='/' element={<BlogList/>} />
      <Route path='/blogcontents/:id' element={<BlogContents/>}/>
    </Routes>
    
    
    </>
  );
}

export default App;
