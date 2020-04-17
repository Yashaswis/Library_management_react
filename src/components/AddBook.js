import React, { Component } from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap'; 

class AddBook extends Component{
    constructor(props) {  
        super(props);  
       
        this.initialState = {
            bookId:'',
            bookname:'',
            edition:'',
            author:'',
            date:'',
            amount:'',
}
if (props.book.bookId) {  
    this.state = props.book  
  } else {  
    this.state = this.initialState;  
  }  

  this.handleInputChange = this.handleInputChange.bind(this);  
  this.handleSubmit = this.handleSubmit.bind(this);  
}
handleInputChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  } 
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  } 
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.bookId) {  
  
      pageTitle = <h2>Edit Book</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add Book</h2>  
      actionStatus = <b>Save</b>  
    } 
    return (  
        <div>        
          <h2> {pageTitle}</h2>  
          <Row>  
            <Col sm={7}>  
              <Form onSubmit={this.handleSubmit}>  
                <Form.Group controlId="bookname">  
                  <Form.Label>Book Name</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="bookname"  
                    value={this.state.bookname}  
                    onChange={this.handleInputChange}  
                    placeholder="Book Name"  required/>  
                </Form.Group>  
                <Form.Group controlId="author">  
                  <Form.Label>Author</Form.Label>  
                  <Form.Control  
                    type="text"  
                    name="author"  
                    value={this.state.author}  
                    onChange={this.handleInputChange}  
                    placeholder="author" required />  
                </Form.Group>  
                <Form.Group controlId="edition">  
                  <Form.Label>Edition</Form.Label>  
                  <Form.Control  
                    type="number"  
                    name="edition"  
                    value={this.state.edition}  
                    onChange={this.handleInputChange}  
                    placeholder="edition" required />  
                </Form.Group>  
                <Form.Group controlId="date">  
                  <Form.Label>Date</Form.Label>  
                  <Form.Control  
                    type="date"  
                    name="date"  
                    value={this.state.date}  
                    onChange={this.handleInputChange}  
                    placeholder="date" required/>  
                </Form.Group>  
                <Form.Group controlId="amount">  
                  <Form.Label>Amount</Form.Label>  
                  <Form.Control  
                    type="number"  
                    name="amount"  
                    value={this.state.amount}  
                    onChange={this.handleInputChange}  
                    placeholder="amount" required />  
                </Form.Group>  
                <Form.Group>
                  <Form.Control type="hidden" name="bookId" value={this.state.bookId} />  
                  <Button variant="success" type="submit">{actionStatus}</Button>            
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
