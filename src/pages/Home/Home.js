import React from 'react'
import Typewriter from 'typewriter-effect';

import './Home.css'


function Home() {
  return (
<div>
<section className="home app" id="home">
<h3>HI THERE !</h3>
  <div className='typew'>
    <div className=''>
<h1> I'M</h1>
    </div>
    <div className='h11'>
      <h1>
      <span>

      
    <Typewriter
  options={{
    strings: ['shuva chakraborty...', 'A self learner...'],
    autoStart: true,
    loop: true,
  }}
/>
</span></h1>
    </div>
  </div>

 
    {/* <h1>I'M <span>
 
    <Typewriter
  options={{
    strings: ['shuva chakraborty...', 'A self learner...'],
    autoStart: true,
    loop: true,
  }}
/>
      
      
      </span> </h1> */}
    <p>
 A Front-end developer. I am doing a lot of work in this field.
What I know and what I'm experienced- <br></br> 
•Expertise: Html,CSS,C,C++,bootstrap,Tailwind,JavaScript,React js. 
•Comfortable with :firebase,React Router,MongoDB,Rest API,Node js,daisyUI,Express js. <br></br> 
•Development Tools:VsCode,Github,Figma,Chrome DevTool,heroku,Netlify.
•Familiar with:Oracle,LaTeX.
    </p>
    
    <a target="_blank"  href="https://drive.google.com/file/d/1uuwKBKD6-2rh0s7kCDAEAr17pcZZpDYy/view?usp=sharing" download=""><button class="btn"> Download CV <i class="fas fa-download"></i> </button></a>

</section>




    </div>
  )
}

export default Home