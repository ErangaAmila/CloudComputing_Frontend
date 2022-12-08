import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Badge,
    Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import cart from '../images/cart.png'
class AppNavbar extends React.Component{
   
    state={
        isOpen:false,
        cartCount:0
    }

    toggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
       return (
            <div>
                <Navbar color='light' light expand="sm" className="mb-5 fixed-top" >
                    <img src={logo} style={{height:50}} className='logo' alt=''/>
                    <Container>
                        <NavbarBrand href='/'>Online Book Store</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto">
                            <NavLink href="/add">Add Books</NavLink>
                            <NavLink href="/details">Manage Books</NavLink>
                             </Nav>    
                        </Collapse>                      
                    </Container>
                    <h4><Badge color='warning' style={{marginTop:'10px'}}>{this.props.totalItems}</Badge></h4>
                    <Link to="/cart"><img src={cart} style={{height:30}} alt=""/> </Link>                 
                </Navbar>
            </div>
              
        );
    }
}

export default AppNavbar;