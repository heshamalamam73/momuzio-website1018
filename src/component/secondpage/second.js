import React ,{Component} from 'react';
// import './second.css';


class Second extends Component{
    render(){
        return(
            <section>
                <div className='container2'>
                <div className='box1 boxs'>
                     <div>
                    <i className="fa fa-code "></i>                    
                    </div>
                    <h2> Working As A Programmer </h2>
                    <p>Working as a programmer and web designer is fun so let's start talking about what we can do with our experience and what we will learn in the future</p>
                </div>
                <div className='box1 boxs'>
                    <div>
                    <i className="fa fa-desktop "></i>                    
                    </div>
                    <h2>Learn To Design </h2>
                    <p>We provide explanations and queries about the most used programming languages for free. You can inquire by contacting one of the tools available on the website</p>
                </div>
                <div className='box1 boxs'>
                    <div>
                    <i className="fa fa-address-card  "></i>                    
                    </div>
                     <h2>Best Frameworks </h2>
                     <p>Most modern web developers have a list of frameworks and libraries that make their work faster, more efficient and more convenient. These are tools that they are used to using and like. But building an advantage over others requires every self-respecting programmer to be familiar with the latest web development techniques

</p>
                </div>
                </div>

            </section>
        )
    }
}
export default Second;