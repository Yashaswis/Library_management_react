import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/books';

class ApiService {

    fetchBooks() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchBookById(BookId) {
        return axios.get(USER_API_BASE_URL + '/' + BookId);
    }

    deleteBook(BookId) {
        return axios.delete(USER_API_BASE_URL + '/' + BookId);
    }

    addBook(book) {
        return axios.post(""+USER_API_BASE_URL, book);
    }

    editBook(book) {
        return axios.put(USER_API_BASE_URL + '/' + book.bookId, book);
    }

}

export default new ApiService();