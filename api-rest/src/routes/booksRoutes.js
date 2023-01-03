import express from 'express'
import bookControler from '../controller/booksController.js';

const router = express.Router();

router
    .get('/books', bookControler.getBooks);

export default router