

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';



function App() {
  return (
    <div >
    <Main></Main>
   <Routes>
   <Route path="/" element={<Home></Home>}> </Route>
   <Route path="/home" element={<Home></Home>}></Route>
   <Route path="/about" element={<About></About>}></Route>
 
   </Routes>
    

    </div>
  );
}

export default App;
