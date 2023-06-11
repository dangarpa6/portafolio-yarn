import React from 'react'
import './Intro.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Blobs from './Blobs';
import logo from '../img/DP_png_3.png';
import FloatingDiv from './FloatingDiv/FloatingDiv';
import Crown from '../img/crown.png'
import Blobs2 from './Blobs2';
import thumbup from '../img/thumbup.png'
import background from '../img/computer.png'
import './blobs.css'


const Intro = () => {
  return (
    <div className="intro">

      <div className="i-left">
        <div className="i-name">
          <span>Hello! I Am</span>
          <span>Developer</span>
          <span>Passionate about web programming, knowledge in graphic design, advertising and animation which allows me takes apps and websites construction to the next level, don't hesitate in contact me.</span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
          <a href="https://github.com/dangarpa6" target='_blank'>
            <FaGithub className='git' />
          </a>
          <a href="https://www.linkedin.com/in/daniel-garcia-2b1636231/" target='_blank'>
            <FaLinkedin className='linkin' />
          </a>
        </div>

      </div>
      <div className="i-right">

        <Blobs className='blob' />
        <Blobs2 className='blob2' />

        <img className='logo' src={logo} alt="" />

        <div className='errors' style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={Crown} txt1='Solving' txt2='Errors' />
        </div>

        <div className= 'creativity' style={{bottom: '10%', left: '10rem'}}>
          <FloatingDiv image={thumbup} txt1='Guaranteed' txt2='Creativity' />
     </div>

        <div className='blur' style={{background: "rbg(238 210 255) "}}></div>
        <div className='blur' style={{background: "#C1F5FF", top:'17rem', width:'15rem',
      height:'20rem',
      left:'4rem',
      top: '5.7rem'
      }}></div>


      </div>
    </div>
  )
}

export default Intro