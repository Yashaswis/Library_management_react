import React, { Component } from 'react';   
import { Container, Button } from 'react-bootstrap';  
import ListBook from './ListBook'; 
import AddBook from './AddBook';
import axios from 'axios';

class EditBook extends Component{
    constructor(props) {  
        super(props);  
      
        this.state = {  
          isAddBook: false,  
          error: null,  
          response: {},  
          bookData: {},  
          isEditbook: false, 
          isBookDetails:true, 
        } 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onCreate() {  
        this.setState({ isAddBook: true });  
        this.setState({ isBookDetails: false });  
      }  
    onDetails() {  
        this.setState({ isBookDetails: true });  
        this.setState({ isAddBook: false });  
      }
    onFormSubmit(data) {  
        this.setState({ isAddBook: true });  
        this.setState({ isBookDetails: false });  
        if (this.state.isEditbook) { 
            axios.put('http://localhost:8080/books/',data).then(result=>{
             alert(result.data);  
                 this.setState({  
                response:result,    
                isAddBook: false,  
                isEditbook: false  
        })  
      });  
    }
    else {  
        axios.post('http://localhost:8080/books/',data).then(result => {  
         alert(result.data);  
           this.setState({  
             response:result,    
             isAddBook: false,  
             isEditbook: false  
           })  
         });  
       }
}
editBook = (BookId) => {  
  console.log(BookId);
    this.setState({ isBookDetails: false });  
   axios.get(`http://localhost:8080/books/${BookId}`).then(result => {  
        this.setState({  
          isEditbook: true,  
          isAddBook: false,  
          bookData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }
  render(){
    let bookForm; 
    if(this.state.isAddBook || this.state.isEditbook){
        bookForm = <AddBook onFormSubmit=
        {this.onFormSubmit} book={this.state.bookData} />
    }
    return(
        <div className="App">
            <Container>
                <h1 style=
                {{ textAlign:'center'}}>Library Management</h1>
                <hr></hr>
                {!this.state.isBookDetails && <Button variant="primary" 
                 onClick={()=>this.onDetails()}>Book Details</Button>}
                {!this.state.isAddBook && <Button variant="primary" onClick={() => this.onCreate()}>Add Book</Button>}  
        <br></br>
        {!this.state.isAddBook && <ListBook editBook={this.editBook} />} 
        {bookForm}
            </Container>
        </div>
    );
  }
}
export default EditBook;