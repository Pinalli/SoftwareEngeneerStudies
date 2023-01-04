import express from 'express'
import BookControler from '../controller/booksController.js';

const router = express.Router();

//Sequence from most specific to least specific
router
    .get('/books', BookControler.getBooks)
    .get('/books/search', BookControler.getBookByPublishingCompany)
    .get('/books/:id', BookControler.getBookById)
    .post('/books/:id', BookControler.registerBookForId)
    .post('/books', BookControler.registerBook)
    .put('/books/:id', BookControler.toUpdateBook)
    .delete('/books/:id', BookControler.toDeleteBook)


export default router;