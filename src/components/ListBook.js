import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';


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
               <Typography variant="h4" style={style}>Book Details</Typography>
               <Button variant="contained" color="primary" onClick={() => this.addBook()}> Add Book</Button>
                <Table>
                <TableHead>
                     <TableRow>
                     <TableCell align="center">BookId</TableCell>
                     <TableCell align="center">BookName</TableCell> 
                     <TableCell align="center">Edition</TableCell> 
                     <TableCell align="center">Author</TableCell>
                     <TableCell align="center">Date</TableCell>
                     <TableCell align="center">Amount</TableCell>
                     </TableRow>
                 </TableHead>
                    <TableBody>
                        {this.state.books && this.state.books.map(row => (
                       <TableRow key={row.bookId}>
                           <TableCell align="center" component="th" scope="row">
                                    {row.bookId}
                                </TableCell>
                                        <TableCell align="center">{row.bookname}</TableCell>
                                        <TableCell align="center">{row.edition}</TableCell>
                                        <TableCell align="center">{row.author}</TableCell>
                                        <TableCell align="center" >{row.date}</TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <TableCell align="left" onClick={() => this.editBook(row.bookId)}> <CreateIcon /></TableCell>
                                        <TableCell align="left" onClick={() => this.deleteBook(row.bookId)}> <DeleteIcon /></TableCell>
                                        
                                       
                                    </TableRow>
                        ))}       
                    </TableBody>
                </Table>
            </div>
        );
    }
}
    const style ={
        display: 'flex',
        justifyContent: 'center',
        color:'black'
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