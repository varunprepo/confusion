import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { Link } from 'react-router-dom';

    function RenderMenuItem ({dish}) {
debugger;
        return (
            <Card>                
                    <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>              
            </Card>
        );
    }
 
function RenderDish({dish}){
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

function RenderComments({comments}){
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


 
    const Menu = (props) => { 
 
            const menu = props.dishes.map((dish) => {
                return (
                  <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderDish dish = {dish} />             
                    <RenderComments comments={dish.comments} />               
                  </div>           
                );
            });
        
        return (
              <div className="container">
                <div className="row">                    
                    {menu}
                </div>                
            </div>
        );
    }


export default Menu;
