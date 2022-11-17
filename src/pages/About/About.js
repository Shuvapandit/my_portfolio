import React from 'react'
import './About.css'

function About() {
 return (
<div>
<section class="about" id="about">

<h1 class="heading"> <span>about</span> me </h1>

<div class="row">
<div class="info">
 <h3> <span> name : </span> Shuva Chakraborty </h3>
<h3> <span> age : </span> 23 </h3>
<h3> <span> qualification : </span> B.Sc in CSE </h3>
<h3> <span> post : </span> front end developer </h3>
<h3> <span> language : </span> Bangala ,English </h3>
        
    </div>

    <div class="counter">

        <div class="box">
            <span>1+</span>
            <h3>years of experience</h3>
        </div>

        <div class="box">
            <span>20+</span>
            <h3>porject completed</h3>
        </div>

       

    </div>

</div>

</section>

    </div>
  )
}

export default About