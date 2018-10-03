import React from 'react';
import myimg from '../../img/myimg.jpg'

const About = () =>{
    return (
        <div className='about'>
        <div className='left'>
        <div className="contant">
        <h1>mahmoud hassan hamed okily </h1>
        <h4> full stack web developer</h4>
        <h4>heshamalamam73@gmail.com</h4>
        </div>
        </div >
        <div className='right'>
            <div className='myimg'>
                    <img src={myimg} alt='momuzio'/>
            </div>
        </div>


        </div>
    )
}

export default About ;