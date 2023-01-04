import books from '../models/Book.js';

class BookControler {

    static getBooks(req, res) {
        books.find()
            .populate('author')
            .exec((err, books) => {
                res.status(200).json(books);
            })
    }
    static getBookById = (req, res) => {
        const id = req.params.id;

        books.findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} = Id of the book not found` })
                } else {
                    res.status(200).send(books)
                }
            })
    }

    static registerBookForId = (req, res) => {
        const id = req.params.id;

        books.findById(id, (err, books) => {
            {
                if (err) {
                    res.status(400).send({ message: `${err.message} = Id of the book not found` })

                } else {
                    res.status(200).send(books)
                }
            }
        })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body);
        book.save(err => {

            if (err) {
                res.status(500).send({ message: `${err.message} = Fail to register book` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static toUpdateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book updated successfully' })

            } else {
                res.status(500).send({ message: `${err.message} = Fail to update book` })
            }
        })
    }

    static toDeleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book deleted successfully' })

            } else {
                res.status(500).send({ message: `${err.message} = Fail to delete book` })
            }
        })
    }

    static getBookByPublishingCompany = (req, res) => {
        const publishingCompany = req.query.publishingCompany;
        books.find({ publishingCompany: publishingCompany }, {}, (err, books) => {

            res.status(200).send(books)
        })
    }
}

export default BookControler