const express = require("express");
const app = express();
const port = 8000;
//in memory
const Books = [
    { id: 1, book: "siraj superman", author: "siraj" },
    { id: 2, book: "Avengers", author: "tommy cruse" },

]
//middleware plugin
app.use(express.json());
//routes
app.get('/books', (req, res) => {
    res.json(Books);
})
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id))
        res.status(400).json({ error: `id must be with numbers` });
    const book = Books.find((e) => e.id === id);
    if (!book)
        return res.status(404).json({ error: `Book with id ${id} doesnot exist ` });
    return res.status(200).json(book);
})
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = Books.length + 1;
    if (!title || title === "") return res.status(400).json({ error: 'title is required' })
    if (!author || author === "") return res.status(400).json({ error: 'author is required' })
    const book = { id, title, author }
    Books.push(book);
    return res.status(201).json({ message: 'book created success', id });

})
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'must be a number' });
    }
    const indexToDelete = Books.findIndex(e => e.id === id);
    if (indexToDelete < 0)
        return res.json({ error: `book with ${id} does not exist` })

    Books.splice(indexToDelete, 1);
    return res.status(200).json({ message: 'book deleted', id })
})
app.listen(port, () => {
    console.log("hi from server");

})