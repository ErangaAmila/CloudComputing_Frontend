import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navabar";

import Books from "./components/Books";
import Cart from "./components/Cart";
import AddBooks from "./components/AddBooks";
import ViewBooks from "./components/ViewBooks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log("Error :" + err));
  }
  addToCart = (selectedBook) => {
    let cartItem = this.state.cart;
    let BookID = selectedBook.BookID;
    if (this.checkProduct(BookID)) {
      let index = cartItem.findIndex((x) => x.BookID === BookID);
      cartItem[index].qty = selectedBook.qty;
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedBook);
    }
    this.setState({
      cart: cartItem,
    });
    this.sumTotalItems();
    this.sumTotalAmount();
  };

  checkProduct = (BookID) => {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.BookID === BookID;
    });
  };

  sumTotalItems = () => {
    this.setState({
      totalItems: this.state.cart.length,
    });
  };

  sumTotalAmount = () => {
    let total = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].price * parseInt(this.state.cart[i].qty);
    }
    this.setState({
      totalAmount: total,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarApp totalItems={this.state.totalItems} />

          <Route
            path="/add"
            exact
            render={props => <AddBooks {...props} />} 
          />

          <Route
            path="/details"
            exact
            render={props => <ViewBooks {...props} />} 
       
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Books
                {...props}
                books={this.state.books}
                cart={this.state.cart}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />

          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cart={this.state.cart}
                totalAmount={this.state.totalAmount}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
