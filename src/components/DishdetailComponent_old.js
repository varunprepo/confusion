import React from 'react'
import { Card,CardImg,CardBody,CardImgOverlay,CardText,CardTitle } from 'reactstrap';

 class DishDetail extends React.Component {


renderComments(comments){
    if(comments==null){
        return(
            <div></div>
        );
    }
      const comments1=comments.map((comment)=>{
        return(
            
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US',{
                    year:'numeric',
                    month:'short',
                    day:'2-digit'
                }).format(new Date(Date.parse(comment.date)))}
                </p>
            </li>
        )
            })
       return(
           <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className="list-unstyled">
                   {comments1}
               </ul>
           </div>
       )
    }



 renderDish(dish){
     if(dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
            <Card>
    <CardImg width="100%" src={dish.image} alt={dish.name} />
   <CardBody>
   <CardTitle>{dish.name}</CardTitle>
   <CardText>{dish.description}</CardText>
   </CardBody>
            </Card>
            </div>
            );
        }else{
            return(
                <div></div>
            );
        };
    }
    render() {
        
        const dish=this.props.dish
        if(dish==null){
            return(
                <div></div>
            );
        }
        const dishItem=this.renderDish(dish)
        const commentItem=this.renderComments(dish.comments)
        return(
            <div className="container">
                <div className="row">
                    {dishItem}
                    {commentItem}
                </div>
            </div>
        )
        
   
    }
};

export default DishDetail;
