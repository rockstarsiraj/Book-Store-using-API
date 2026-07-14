require("dotenv/config"); 
const express = require("express");
const bookRouter=require('./routes/book.routes');
const authorRouter=require('./routes/author.routes.js');
const {logmiddleware}=require('./middleware/middleware.js')
const app = express();
const port = 8000;

//middleware plugin
app.use(express.json());
//middleware A
app.use(logmiddleware);
//routes
app.use('/books',bookRouter);
app.use('/authors',authorRouter);

app.listen(port, () => {
    console.log("hi from server");

})