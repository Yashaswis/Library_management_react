import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteBook= () =>{  
     axios.delete('http://localhost:8080/books'+this.props.obj.bookId)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.bookname}  
          </td>  
          <td>  
            {this.props.obj.author}  
          </td>  
          <td>  
            {this.props.obj.edition}  
          </td>  
          <td>  
            {this.props.obj.date}  
          </td>  
          <td>  
            {this.props.obj.amount}  
          </td> 
          <td>  
          <Link to={"/edit/"+this.props.obj.bookId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteBook} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table; 