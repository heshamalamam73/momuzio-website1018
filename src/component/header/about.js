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
                   <h1>mahmoud hassan hamed okily </h1>
                <h4> full stack web developer</h4>
                <h4>heshamalamam73@gmail.com</h4>
              </div >
              </div>
           </div>
        </div>
       
    )
}

export default About ;