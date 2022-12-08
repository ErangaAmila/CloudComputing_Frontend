import React from 'react';
import { Row,Col,Card, Button, CardTitle, CardText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

class BookCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedBook: {},
          isAdded: false,
          currQty:1
        };
    } 
    
    incrementQty=(BookID,title, price)=>{
        this.setState({
            currQty:this.state.currQty+1
        },function(){
          this.addToCart(BookID,title, price);  
        })
    }
    addToCart=(BookID,title, price) =>{
        this.setState(
          {
            selectedBook: {
                BookID: BookID,
                title: title,
                price: price,
                qty:this.state.currQty
            },
            isAdded: true    
          },
          function() {
            this.props.addToCart(this.state.selectedBook);
          }
        );
      }

    render(){
        const {bookID,title,authors,price,average_rating} = this.props.book;
        const d1 = this.state.isAdded ? null : "none";
        const d2 = this.state.isAdded ? "none": null;
        const cardColor=["secondary","success","danger","primary","danger","warning","info","light","dark"];
        const rand = Math.round(0 + Math.random() * (4 - 0));
           
        return (
        <Card body outline color={cardColor[rand]} className='card-style'>
            <CardTitle> <strong>{title}</strong></CardTitle>
            <CardText>{authors}</CardText>
            <strong> ₹ {price}.00</strong>
            <StarRatingComponent 
                name="star" 
                editing={false}
                starCount={5}
                value={average_rating}
            />
            <Button id={bookID} onClick={this.addToCart.bind(
                this,
                bookID,
                title,
                price
                )} 
                style={{display:d2}}>Add to cart
            </Button>
            <Row style={{display:d1}}>
                <Col sm="2">
                    <Button className='sm-btn' onClick={this.incrementQty.bind(
                        this,
                        bookID,
                        title,
                        price
                        )} >+
                    </Button>
                </Col> 
                <Col sm="7" style={{textAlign:'center'}}> {this.state.currQty} added in cart</Col> 
                <Col sm="2"><Button className='sm-btn'>-</Button></Col>    
            </Row>
        </Card>
    );
    }
}

export default BookCard;
