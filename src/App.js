

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';



function App() {
  return (
    <div >
    <Main></Main>
   <Routes>
   <Route path="/" element={<Home></Home>}> </Route>
   <Route path="/home" element={<Home></Home>}></Route>
 
   </Routes>
    

    </div>
  );
}

export default App;
