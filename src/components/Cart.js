import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row,Col,Table,Container,Button} from 'reactstrap';
class Cart extends React.Component{
  render(){
    return (
      <Container style={{marginTop:'80px'}}>
        <Row>
          <Col sm="10"><h1><strong>Your Cart</strong></h1></Col>
          <Col sm="2"><Button color="warning" style={{border:'2px solid black'}}>PROCEED TO CHECKOUT</Button><br/><br/></Col>
        </Row>
        
        <Table border='1'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item)=>{
              return( 
              <tr>
                <td>{item.title}</td>
                <td>
                  <Row >
                    <Col sm="2">
                      <Button className='sm-btn'>+</Button>
                    </Col> 
                    <Col sm="7" style={{textAlign:'center'}}>{item.qty} added in cart</Col> 
                    <Col sm="2"><Button className='sm-btn'>-</Button></Col>    
                  </Row>
                </td>
                <td> {item.price}</td>
                <td>₹ {item.qty*item.price}</td>
              </tr>
              )})}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td><strong>Total cart amount</strong></td>
              <td><strong>₹ {this.props.totalAmount}</strong></td>
            </tr>
          </tfoot>
          </Table>
      </Container>
      );
    }
}

export default Cart;
