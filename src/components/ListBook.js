 import './Style.css';
import { Table } from 'react-bootstrap';
import {Button}from 'react-bootstrap';
import React, { Component } from 'react'  
import axios from 'axios';  

class ListBook extends Component {
    constructor(props){
        super(props);
    this.state={
        error:null,
        books:[],
        response:{}
    }
}
    componentDidMount() {
        axios.get('http://localhost:8080/books').then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    books:result  
                });  
        },
        (error)=>{  
            this.setState({error});
        }
        )
    }
    delete(BookId) {  
        const { books } = this.state;     
       axios.delete('http://localhost:8080/books/' + BookId ).then(result=>{  
         alert(result.data);  
          this.setState({  
            response:result,  
            books:books.filter(book=>book.bookId !== BookId)  
          });  
        });  
      }

    render(){
        const{error,books}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {
        return(
        <div>
            <Table>
                <thead className="btn-primary">
                    <tr>
                        <th >Book Id</th>
                        <th >BookName</th> 
                        <th>Edition</th> 
                        <th >Author</th>
                        <th >Date</th>
                        <th >Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.books.map((book)=> {
                return (<tr key={book.bookId}>
                <td >{book.bookId}</td>
                <td >{book.bookname}</td>
                <td >{book.edition}</td>
                <td>{book.author}</td>
                <td >{book.date}</td>
                <td >{book.amount}</td>
                <td><Button size="la" classname="mr-2" variant="info" 
                onClick={() => this.props.editBook(book.bookId)}>Edit</Button>       
                    <Button variant="danger" 
                onClick={() => this.delete(book.bookId)}>Delete</Button>
                </td>
            </tr>
        )
                })}
                </tbody>
            </Table>
            </div>
        );
    }
}
}
export default ListBook;


// import React, { Component } from 'react';
// import AddBook from './AddBook';
// import PaginationButtons from './pagination';
// import './Style.css';
// class ListBook extends Component {
//     state = {
//         currentIndex: -1,
//         list: this.returnList()
//     }
//     returnList() {
//         if (localStorage.getItem('Books') == null)
//             localStorage.setItem('Books', JSON.stringify([]))
//         return JSON.parse(localStorage.getItem('Books'))
//     }
//     handleEdit = index => {
//         this.setState({
//             currentIndex: index
//         })
//     }
//     handleDelete = (index) => {
//         var list = this.returnList()
//         list.splice(index, 1);
//         localStorage.setItem('Books', JSON.stringify(list))
//         this.setState({ list, currentIndex: -1 })
//     }
//     onAddOrEdit = (data) => {
//         var list = this.returnList()
//         if (this.state.currentIndex == -1)
//             list.push(data)
//         else
//             list[this.state.currentIndex] = data
//         localStorage.setItem('Books', JSON.stringify(list))
//         this.setState({ list, currentIndex: -1 })
//     }
//     render() {
//         return (
//             <div>
//                 <AddBook
//                     currentIndex={this.state.currentIndex}
//                     list={this.state.list}
//                     onAddOrEdit={this.onAddOrEdit}
//                 />
//                 <hr />
//                 <h3>List of books</h3>
//                 <div class="bs-example">
//                 <table className="table table-striped table-dark" >
//                     <thead>
//                         <tr>
//                             <th >Bookid</th>
//                             <th >BookName</th> 
//                             <th>Edition</th> 
//                             <th >Author</th>
//                             <th >Date</th>
//                             <th >Amount</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.list.map((item, index) => {
//                             return <tr key={index}>
//                                 <td >{index}</td>
//                                 <td >{item.BookName}</td>
//                                 <td >{item.Edition}</td>
//                                 <td>{item.Author}</td>
//                                 <td >{item.Date}</td>
//                                 <td >{item.Price}</td>
//                                 <td><button className="buttons" onClick={() => this.handleEdit(index)}>Edit</button></td>
//                                 <td><button className="buttons" onClick={() => this.handleDelete(index)}>Delete</button></td>
//                             </tr>
//                         })}
//                     </tbody>
//                 </table>
//                 <PaginationButtons />
//             </div>

//             </div>
//         );
//     }

// }
// export default ListBook;