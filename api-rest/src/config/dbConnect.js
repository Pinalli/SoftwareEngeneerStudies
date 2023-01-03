import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://dbUser:321@cluster0.3sdn3qb.mongodb.net/node-express");

let db = mongoose.connection;

export default db;