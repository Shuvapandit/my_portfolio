import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/myimages/shuvpsp.jpg'
import './Main.css'

function Main() {
  return (
    <div className='app'>
  <header className='sidebar'>

<div class="user usr ">  
<img src={img1}></img> 
<h3 class="name">Shuva Chakraborty</h3>
<p class="post">front end developer</p>
</div>

<nav class="navbar">
    <ul>
        
    {/*     <Link className=' ' to=''>home</Link> */}
    
        <li><Link to='/home'> Home</Link></li>
        <li><Link to='/about'> About</Link></li>
        <li><Link to='/portfolio'> portfolio</Link></li>
        <li><Link to='/contact'> contact</Link></li>
       
       
    </ul>
</nav>

</header>



    </div>
  )
}

export default Main