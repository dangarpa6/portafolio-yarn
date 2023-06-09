import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glases from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../card/Card';
import resume from './resume.pdf'


const Services = () => {
  return (
    <div className='services'>
      {/*left side*/}

      <div className='awesome'>
        <span>My Amazing</span>
        <span>Skills</span>
        <spane>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quae amet ipsa
          <br />
          ispum is simpley dummy text of printing
        </spane>

        <a href={resume} download>

        <button className='button s-button'>Dowload CV</button>

        </a>
        <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>

      </div>

      {/*left side*/}

      <div className='cards'>
       

        <div style={{left: '14rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={'Desing'}
            detail={'Photoshop, Illustator, Adobe xd'}
          />
        </div>
       {/* second card*/}
        <div style={{top:'12rem', left: '-4rem'}}>
          <Card
            emoji={Glases}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React'}
          />
        </div>

        {/* 3rd*/}

        <div style={{top:'19rem', left: '12rem'}}>
          <Card
            emoji={Humble}
            heading={'Animation'}
            detail={'Adobe Flash, After Effects'}
          />
        </div>



      </div>


    </div>
  )
}

export default Services