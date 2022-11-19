

import { Route, Routes } from 'react-router-dom';
import './index.css'
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import useLocalStorage from 'use-local-storage'



function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app bg-gray-500 " data-theme={theme} >
    <Main></Main>
    <div className='theme-toggle'>
          
          <i onClick={switchTheme} class='fas fa-toggle-on'></i>
        </div>
   <Routes>
   <Route path="/" element={<Home></Home>}> </Route>
   <Route path="/home" element={<Home></Home>}></Route>
   <Route path="/about" element={<About></About>}></Route>
 
   </Routes>
    

    </div>
  );
}

export default App;
