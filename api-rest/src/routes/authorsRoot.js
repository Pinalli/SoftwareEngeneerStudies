import express from 'express'
import AuthorControler from '../controller/authorsController.js';

const router = express.Router();

router
    .get('/authors/:id', AuthorControler.getAuthorById)
    .get('/authors', AuthorControler.getAuthores)
    .post('/authors', AuthorControler.registerAuthor)
    .put('/authors/:id', AuthorControler.toUpdateAuthors)
    .delete('/authors/:id', AuthorControler.toDeleteAuthors)


export default router;