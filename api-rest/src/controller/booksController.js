import books from '../models/Book.js';

class bookControler {
    static getBooks(req, res) {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }
}

export default bookControler