import Axios from "axios";
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddForm extends React.Component {
  state = {
    bookID: 0,
    title: "",
    authors: "",
    average_rating: 0,
    isbn: "",
    language_code: "",
    ratings_count: 0,
    price: 0,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForms = (e) => {
    e.preventDefault();

    const body = {
      bookID: this.state.bookID,
      title: this.state.title,
      authors: this.state.authors,
      average_rating: this.state.average_rating,
      isbn: this.state.isbn,
      language_code:this.state.language_code,
      ratings_count: this.state.ratings_count,
      price: this.state.price,
    }

    Axios.post("http://localhost:5000/api/books/",body).then(() => {
        alert("Created");
      })
      .catch((err) => console.error("Error :" + err));


  };

  render() {
    return (
      <Form onSubmit={this.submitForms} style={{ marginTop: "150px", width: "80%", marginLeft: "140px" }}>
        <FormGroup>
          <Label for="bookID">Book ID</Label>
          <Input
            type="number"
            name="bookID"
            id="bookID"
            onChange={this.onChange}
            value={this.state.bookID}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="authors">Authors</Label>
          <Input
            type="text"
            name="authors"
            id="authors"
            onChange={this.onChange}
            value={this.state.authors}
          />
        </FormGroup>
        <FormGroup>
          <Label for="average_rating">Average Rating</Label>
          <Input
            type="number"
            name="average_rating"
            id="average_rating"
            onChange={this.onChange}
            value={this.state.average_rating}
        
          />
        </FormGroup>
        <FormGroup>
          <Label for="isbn">isbn</Label>
          <Input
            type="text"
            name="isbn"
            id="lisbn"
            onChange={this.onChange}
            value={this.state.isbn}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="language_code">Language Code</Label>
          <Input
            type="text"
            name="language_code"
            id="language_code"
            onChange={this.onChange}
            value={this.state.language_code}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ratings_count">Ratings Count</Label>
          <Input
            type="number"
            name="ratings_count"
            id="ratings_count"
            onChange={this.onChange}
            value={this.state.ratings_count}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            onChange={this.onChange}
            value={this.state.price}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddForm;
