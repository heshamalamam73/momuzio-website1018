import React  from 'react';
import Addcomment from './addcomment'



 const Comments = (props) =>{
  const {Comments,deleteComment} = props;
  let length = Comments.length;

  const listComments = length ?( Comments.map(comment => {
            return(
                <div className='comment-style' key={comment.id}>
                <div className='content'>
                <span onClick={()=>deleteComment(comment.id)}>&times;</span>
                <h3>{comment.name} </h3>
                <p>{comment.comment}</p>
                </div>
                <hr></hr>
                </div>
            )
        }) 
  ) : (
      
      <h1 >there is no comments to show </h1>
      
  )


        
    return(
        <div className='comments-views'>
        <div className='leftbox'>
        <div>
            <div className='comment'>
            <h1>comments</h1>
            <hr></hr>
               {listComments}
            </div>
        </div>
         </div>

           
           
        </div>
    )
}
    
export default Comments;