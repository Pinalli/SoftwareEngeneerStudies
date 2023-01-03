import mongoose from 'mongoose'

const schemaBook = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, require: true },
        author: { type: String, require: true },
        publishingCompany: { type: String, require: true },
        numPages: { type: Number }
    }
);

const books = mongoose.model('books', schemaBook);

export default books;
