import React, { Component } from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap'; 
import ApiService from "../service/ApiService";
class AddBook extends React.Component{
    constructor(props) {  
        super(props);  
        this.state = {
            bookname:'',
            edition:'',
            author:'',
            date:'',
            amount:'',
            message: null
}
this.saveBook = this.saveBook.bind(this); 
this.onChange = this.onChange.bind(this);    
}
saveBook = (e) => {
  e.preventDefault();
  let book = {bookname: this.state.bookname, edition: this.state.edition, author: this.state.author, date: this.state.date, amount: this.state.amount};
  ApiService.addBook(book)
      .then(res => {
          this.setState({message : 'books added successfully.'});
          this.props.history.push('/books');
      });
}
onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value }); 

    render() {  
    return (  
        <div>        
          <h2> Add Book</h2>  
          <Row>  
            <Col sm={6}>  
              <Form >  
                <Form.Group controlId="bookname">  
                  <Form.Label>Book Name</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="bookname"  
                    value={this.state.bookname}  
                    onChange={this.onChange}  
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
                  <Button variant="success" type="submit" onClick={this.saveBook}>Save</Button>            
                </Form.Group>  
              </Form>  
            </Col>  
          </Row>  
        </div>  
      )  
    }
}
export default AddBook;
// class AddBook extends Component {
//     state={
//         ...this.returnStateobject()
//     }
//     returnStateobject() {
//         if(this.props.currentIndex== -1)
//             return{
//                 BookName:'',
//                 Edition:'',
//                 Author:'',
//                 Date:'',
//                 Price:''
//             }
//         else
//             return this.props.list[this.props.currentIndex]
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
//             this.setState({ ...this.returnStateobject() })
//             console.log(prevProps, this.props)
//         }
//     }
//     handleInputChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.onAddOrEdit(this.state)
//     }
//     render() {
//         return (
//             <div class="bs-example">
//     <form textAlign="center" float="center" onSubmit={this.handleSubmit} className="display">
//         <div class="input-group mb-0">
//         <div class="form-group row-md-2">
//             <label class="sr-only">BookName</label>
//             <input name="BookName" type="text" class="form-control form-control-sm"  placeholder="BookName" onChange={this.handleInputChange} value={this.state.BookName} required />
//         </div>
//         </div>
//         <div class="input-group mb-0">
//         <div class="form-group row-md-2">
//             <label class="sr-only">Author</label>
//             <input name="Author" type="text" class="form-control form-control-sm"  placeholder="Author" onChange={this.handleInputChange} value={this.state.Author} required />
//         </div>
//         </div>
//         <div class="input-group mb">
//          <div class="form-group row-md-2">
//             <label class="sr-only">Edition</label>
//             <input name="Edition" type="number" class="form-control form-control-sm"  placeholder="Edition" onChange={this.handleInputChange} value={this.state.Edition} required />
//         </div>
//         </div>
//         <div class="input-group mb">
//          <div class="form-group row-md-2">
//             <label class="sr-only">Amount</label>
//             <input name="Price" type="number" class="form-control form-control-sm" placeholder="Amount" onChange={this.handleInputChange} value={this.state.Price}  required />
//         </div>
//         </div>
//         <div class="input-group mb">
//          <div class="form-group row-md-2">
//             <label class="sr-only">Date</label>
//             <input name="Date" type="Date" class="form-control form-control-sm" placeholder="Date" onChange={this.handleInputChange} value={this.state.Date} required />
//         </div>
//         </div>
//         <div class="input-group mb">
//         <button type="submit" class="btn btn-primary">Save</button>
//         </div>
//     </form>
// </div>
//         );
       
//     }

// }
