import express from "express"

const app = express();

app.use(express.json());

const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 4, title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    { id: 5, title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    { id: 6, title: "The Da Vinci Code", author: "Dan Brown" },
    { id: 7, title: "The Alchemist", author: "Paulo Coelho" }
]

app.get("/", (req, res) => {
    res.status(200).send("Node Course");
})

app.get("/books", (req, res) => {
    res.status(200).json(books);
})

app.get('/books/:id', (req, res) => {
    const index = getBooks(req.params.id);
    res.json(books[index]);
})


app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).send('book has added successfully');
})

app.put('/books/:id', (req, res) => {
    const index = getBooks(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
})

function getBooks(id) {
    return books.findIndex(book => book.id == id);
}

app.delete('/books/:id', (req, res) => {
    let { id } = req.params;
    let index = getBooks(req.params.id);
    books.splice(index, 1);
    res.send(`Books ${id} has been deleted`);
})

export default app;