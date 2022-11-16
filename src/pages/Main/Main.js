import React from 'react'
import img1 from '../../images/myimages/shuvpsp.jpg'
import './Main.css'

function Main() {
  return (
    <div>
  <header>

<div class="user">  
<img src={img1}></img> 
<h3 class="name">Shuva Chakraborty</h3>
<p class="post">front end developer</p>
</div>

<nav class="navbar">
    <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</nav>

</header>



    </div>
  )
}

export default Main