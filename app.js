

// app.js
const express = require('express')
const app = express()
app.use(express.json())

// Our simple data storage
let books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
    { id: 2, title: 'Lord of the Rings', author: 'J.R.R. Tolkien' }
]

// Get all books
app.get('/books', (req, res) => {
    res.json(books)
})

// Get one book
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).send('Book not found')
    res.json(book)
})

// Create a book
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(book)
    res.status(201).json(book)
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})