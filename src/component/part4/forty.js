import React ,{Component} from 'react';
import imga from '../../img/imga.jpeg'
import imgb from '../../img/imgb.jpg'
import imgc from '../../img/imgc.jpeg'
import imgd from '../../img/imgd.jpeg'
import './part4.css';



class Forty extends Component{
    render(){
        return(
            <section className='container4'>
            <div className='content'>
            <h4>Experience and knowledge</h4>
            </div>
             <div className='boxs-parnt'>
             <div className='box box1'>
             <img alt='web developer' src={imga}></img>
             <h3>LANGUAGES</h3>
             <ul>
                 <li>HTML5</li>
                 <li>CSS3</li>
                 <li>JAVASCRIPT</li>
                 <li>RUBY</li>
                 <li>Python</li>
            </ul>
             </div>
             <div className='box box2'>
             <img alt='web designer'  src={imgb}></img>
             <h3>METHODS & TOOLS</h3>
             <ul>
                <li>D3</li>
                <li>SVG</li>
                <li>ES6</li>
                <li>ES2015,2016,2017</li>
             </ul>
             
             </div>
             <div className='box box3'>
             <img alt='full stuk web devolopment' src={imgc}></img>
             <h3>FRAMEWORKS & LIBS</h3>
             <ul>
                <li>Node js</li>
                <li>jQuery</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Testing with jasmine</li>
             </ul>
             </div>
             <div className='box box4'>
              <img alt='computer engenieer' src={imgd}></img>
             <h3>Other</h3>
             <ul>
                <li>Git and github</li>
                <li>Photoshop</li>
                <li>JAVASCRIPT</li>
                <li>Command line </li>
                <li>Databases</li>
                <li>Heroku</li>
             </ul>
             </div>
             </div>
                 
   
            </section>
        )
    }
}
export default Forty;