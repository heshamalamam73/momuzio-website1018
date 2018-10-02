import React,{Component} from 'react';

class Addcomment extends Component{
  
    state ={
        name:'',
        comment:''
    }

    handleCHange= (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
                        }
  handlesubmit =(e)=>{
      e.preventDefault();
    this.props.AddComment(this.state);  
    this.setState({
        name:'',
        comment:''
    }     )   
           }
    render(){
        return (
            <div className='rightbox'> 
            <form onSubmit={this.handlesubmit}>
                <input value={this.state.name} onChange={this.handleCHange} id='name' placeholder='enter your name ?? ' type='text'></input>
                <textarea value={this.state.comment} onChange={this.handleCHange} id='comment' placeholder='your comment ' type='text'></textarea>
                <button type='submet'>add comment </button>
            </form>
            
            </div>
            
        )
}
}

export default Addcomment ;