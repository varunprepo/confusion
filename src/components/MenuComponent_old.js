import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';

import { Link } from 'react-router-dom';
//                      <CardText>{dish.comment}</CardText>  <Link to="/home">Home</Link>
    function RenderMenuItem ({dish, onClick}) {
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


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText> 
                      <CardText>{dish.comments[0].comment}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    render() {
         
 
            const menu = this.props.dishes.map((dish) => {
                return (
//              <div key={dish.id} className="col-12 mt-5">
//                <Media tag="li">
//                    <Media left middle>
//                        <Media object src={dish.image} alt={dish.name} />
//                    </Media>
//                    <Media body className="ml-5">
//                        <Media heading={dish.name}></Media>
//                        <p>{dish.description}</p>
//                    </Media>
//                </Media>  
//              </div> //>

                  <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                      
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                    </Card>
                  </div>           
                );
            });
        

        return (
              <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
               <DishDetail dish={this.state.selectedDish}  />              
            </div>
        );
    }

}
export default Menu;
