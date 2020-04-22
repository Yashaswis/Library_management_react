import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import { Button } from 'react-bootstrap';
import './pagination';

class ListBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books:[],
            message: null
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    componentDidMount() {
        this.reloadBookList();
    }

    reloadBookList() {
        ApiService.fetchBooks()
            .then((res) => {console.log(res)
                this.setState({books: res.data})
            });
    }

    deleteBook(BookId) {
        ApiService.deleteBook(BookId)
           .then((res) => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({books: this.state.books.filter(book => book.bookId !== BookId)});
           })

    }

    editBook(bookId) {
        window.localStorage.setItem("BookId", bookId);
        this.props.history.push('/edit-book');
    }

    addBook() {
        window.localStorage.removeItem("BookId");
        this.props.history.push('/add-book');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Book Details</h2>
                <button className="btn btn-primary" onClick={() => this.addBook()}> Add Book</button>
                <table className="table table-striped table-dark">
                <thead>
                     <tr>
                         <th className="hidden">BookId</th>
                         <th >BookName</th> 
                         <th>Edition</th> 
                         <th >Author</th>
                         <th >Date</th>
                         <th >Amount</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                    <tbody>
                        {this.state.books && this.state.books.map(book => (
                       <tr key={book.bookId}>
                                        <td >{book.bookId}</td>
                                        <td >{book.bookname}</td>
                                        <td >{book.edition}</td>
                                        <td>{book.author}</td>
                                        <td >{book.date}</td>
                                        <td >{book.amount}</td>
                                        <td>
                                            <Button className="btn btn-danger" onClick={() => this.deleteBook(book.bookId)}> Delete</Button> </td>
                                            <td>  <Button className="btn btn-success" onClick={() => this.editBook(book.bookId)}> Edit</Button>
                                        </td>
                                    </tr>
                        ))}       
                    </tbody>
                </table>
            <pagination />
            </div>
        );
    }

}
export default ListBook;

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