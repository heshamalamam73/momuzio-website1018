import React,{Component} from 'react';
import First from '../.././component/firstpage/first';
import Second from '../.././component/secondpage/second';
import Third from '../.././component/part3/third';
import Forty from '../.././component/part4/forty';
import Fifty from '../.././component/part5/fifty';
import Comments from '../.././component/comments/comments';
import Addcomment from '../../component/comments/addcomment';

class Home extends Component{
    state = {
        Comments :[ { id :'1' ,name: 'hesham' , comment:'this is awesome page' },
                    {id :'2' ,name: 'ahmed' , comment:'this is good' },
                    {id :'3' ,name: 'omar' , comment:'this is beautful' },
                    {id :'4' ,name: 'ali' , comment:'this is awesome page' }
                ]
              }


    deleteComment =(id) =>{
        let Comments= this.state.Comments;
        let i = Comments.findIndex(comment => comment.id === id)
        Comments.splice(i ,1 )
        this.setState({
            Comments
        })
    }
    AddComment = (comment)=> {
        let Comments = this.state.Comments;
        Comments.push(comment);
        this.setState({
            Comments:Comments
        })
        }
    
    render(){
    return (
        <div>
        <First />
        <Second />
        <Third />
        <Forty />
        {/* <Comments  Comments={this.state.Comments} deleteComment = {this.deleteComment} /> */}
        {/* <Addcomment AddComment={this.AddComment}/> */}
        <Fifty /> 
    
        </div>
    )
}
}

export default Home ;