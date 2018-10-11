import React from 'react';
import myimg from '../../img/myimg.jpg'

const About = () =>{
    return (
        <div className='container about'>
          <div className="row">
            <div className='col-sm-4 col-md-12 col-lg-6 '>
               <div className='image'>
                  <img src={myimg} alt='momuzio'/>
               </div>
            </div>
            <div className='col-sm-8 col-md-12 col-lg-6 '>
              <div className="contant">
              
              </div >
              </div>
           </div>
        </div>
       
    )
}

export default About ;