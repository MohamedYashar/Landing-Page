
import React from 'react'

import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';

export default function Choose() {
  return (

    <div> 

<div className='choose'>
        <div className='choosechild'>

        <h1> <span style={{ color: "brown"}}>Why</span> Choose Us</h1>
        <p>

            Lorem ipsum is simply dummy text of the priniting and typesetting industry .Lorem ipsum has been in the industry 
            standard dummy test ever since the 1500s.
        </p>
      
            
        </div>
        
       
    </div>
  

    <div>
        <div className='choosemaster' >
        <div className='chooseBox'>
           <StarsRoundedIcon/>
          <h3> Handpicked Hotels</h3>
          <p style={{textAlign: "justify"}}>

            Lorem ipsum is simply dummy text of the priniting and typesetting industry .Lorem ipsum has been in the industry 
            standard dummy test ever since the 1500s.
        </p>
        </div>
        <div className='chooseBox'>
          <PublicRoundedIcon/>
          <h3> World Class Service</h3>
          <p style={{textAlign: "justify"}}>

            Lorem ipsum is simply dummy text of the priniting and typesetting industry .Lorem ipsum has been in the industry 
            standard dummy test ever since the 1500s.
        </p>
        </div>
        <div className='chooseBox'>
          <RecommendRoundedIcon/>
          <h3> Best Price guarantee</h3>
          <p style={{textAlign: "justify"}}>
            Lorem ipsum is simply dummy text of the priniting and typesetting industry .Lorem ipsum has been in the industry 
            standard dummy test ever since the 1500s.
        </p>
        </div>
       </div>
        </div>
    </div>
  )
}
