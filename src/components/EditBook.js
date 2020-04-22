import React, { Component } from 'react';   
import { Container, Button } from 'react-bootstrap'; 
import ApiService from "../service/ApiService"; 
// import ListBook from './ListBook'; 
// import AddBook from './AddBook';
import { Row, Form, Col} from 'react-bootstrap'; 

class EditBook extends Component{
    constructor(props) {  
        super(props);  
      
        this.state = { 
            bookId :'',
            bookname:'',
            edition:'',
            author:'',
            date:'',
            amount:'',
        } 
        this.saveBook = this.saveBook.bind(this);
        this.loadBook = this.loadBook.bind(this);
    }
    componentDidMount() {
      this.loadBook();
  }
  loadBook() {
    ApiService.fetchBookById(window.localStorage.getItem("BookId"))
    .then((res) => {
      let book = res.data;
      this.setState({
      bookId: book.bookId,
      bookname: book.bookname,
      author: book.author,
      edition: book.edition,
      date: book.date,
      amount: book.amount,
      })
  });
}
onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveBook = (e) => {
        e.preventDefault();
       let book;
       book = {bookId: this.state.bookId, bookname:this.state.bookname,author: this.state.author,edition: this.state.edition,date: this.state.date,
        amount: this.state.amount};
        ApiService.editBook(book)
            .then(res => {
                this.setState({message : 'books added successfully.'});
                this.props.history.push('/books');
            });
    }
  render(){
    return(
    <div>
      <h2 className="text-center">Edit User</h2>
      <Row>  
            <Col sm={6}>  
              <Form>  
                <Form.Group controlId="bookname">  
                  <Form.Label>Book Name</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="bookname"  
                    defaultValue={this.state.bookname}  
                    onChange={this.onChange}
                    readOnly="true"  
                    placeholder="Book Name"  required/>  
                </Form.Group>  
                <Form.Group controlId="author">  
                  <Form.Label>Author</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="author"  
                    value={this.state.author}  
                    onChange={this.onChange}  
                    placeholder="author" required />  
                </Form.Group>  
                <Form.Group controlId="edition">  
                  <Form.Label>Edition</Form.Label>  
                  <Form.Control  
                    type="number"  
                    name="edition"  
                    value={this.state.edition}  
                    onChange={this.onChange}  
                    placeholder="edition" required />  
                </Form.Group>  
                <Form.Group controlId="date">  
                  <Form.Label>Date</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="date"  
                    value={this.state.date}  
                    onChange={this.onChange}  
                    placeholder="date" required/>  
                </Form.Group>  
                <Form.Group controlId="amount">  
                  <Form.Label>Amount</Form.Label>  
                  <Form.Control  
                    type="number"  
                    name="amount"  
                    value={this.state.amount}  
                    onChange={this.onChange}  
                    placeholder="amount" required />  
                </Form.Group>  
                <Form.Group>  
                  <Button variant="success" type="submit" onClick={this.saveBook}>Update</Button>            
                </Form.Group>  
              </Form>  
            </Col>  
          </Row>
    </div> 
    );
  }
}
export default EditBook;