import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import {Input,InputGroup,Container } from 'reactstrap';
import BookCard from './BookCard';
class Books extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    handleSearchChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    searchingFor=(text) =>{
        return function(x) {
        return x.title.toLowerCase().includes(text.toLowerCase()) || !text;
        };
    }
    render(){
        let booksData;
        let term=this.state.searchText;
        booksData = this.props.books
        .filter(this.searchingFor(term))
        .map(book => {
            return (
                <BookCard book={book} cart={this.props.cart} key={book.bookID} addToCart={this.props.addToCart}/>
            );
        });
        let view;
        if (booksData.length <= 0 && !term) {
        view =<h1>Loading. . .</h1>;
        } else if (booksData.length <= 0 && term) {
        view = <h1>No Results Found</h1>;
        } else { view = booksData }

        return (
            <div>
                <Container style={{marginTop:'80px'}}>
                    <InputGroup>
                        <Input  placeholder="Type here to search..." onChange={this.handleSearchChange}/>
                    </InputGroup>
                    <br />
                    <div>{view}</div>
                </Container>
            </div> 
        );
    }
}

export default Books;
