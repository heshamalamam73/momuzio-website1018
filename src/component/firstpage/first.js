import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';


class First extends Component{
    render(){
        return(
            <main >
                <div className='container'>
                <h1>Welcome to  momuzio</h1>
                <p>Designer and developer of web pages with the latest technologies</p>
                <div><NavLink to='/about' >contact us</NavLink></div>
                </div>
            </main>
            
           
        
        )
    }
}
export default First;