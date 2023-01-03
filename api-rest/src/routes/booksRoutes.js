import express from 'express'
import BookControler from '../controller/booksController.js';

const router = express.Router();

router
    .get('/books', BookControler.getBooks)
    .get('/books/search', BookControler.getBookByPublishingCompany)
    .get('/books/:id', BookControler.registerBookForId)
    .post('/books', BookControler.registerBook)
    .put('/books/:id', BookControler.toUpdateBook)
    .delete('/books/:id', BookControler.toDeleteBook)


export default router;