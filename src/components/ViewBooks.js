import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";


class DataTable extends Component {
  state = {
    books: [],
  };



  getBooks() {
    axios
      .get("http://ccloadblancer-1325520498.us-east-1.elb.amazonaws.com/api/books/")
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log("Error :" + err));
  }

  componentDidMount() {
    this.getBooks();
  }

  deleteBook = (id) => {
    axios
      .delete("http://ccloadblancer-1325520498.us-east-1.elb.amazonaws.com/api/books/" + id)
      .then(() => {
        alert("Deleted");
        this.getBooks();
      })
      .catch((err) => console.error("Error :" + err));
  };

  render() {
    const bk = this.state.books.map((books) => {
      return (
        <tr key={books._id}>
          <th scope="row">{books.bookID}</th>
          <td>{books.title}</td>
          <td>{books.authors}</td>
          <td>{books.isbn}</td>
          <td>{books.language_code}</td>
          <td>{books.price}</td>
          <td>
            <div style={{ width: "110px" }}>
              <Button color="danger" onClick={() => this.deleteBook(books._id)}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div>
     
    
        <Table
          responsive
          hover
          striped
          style={{ marginTop: "150px", width: "80%", marginLeft: "140px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Language</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{bk}</tbody>
        </Table>
      </div>
    );
  }
}

export default DataTable;
