const express = require("express");

const bookRouter=require('./routes/book.routes');
const {logmiddleware}=require('./middleware/middleware.js')
const app = express();
const port = 8000;

//middleware plugin
app.use(express.json());
//middleware A
app.use(logmiddleware);
//routes
app.use('/books',bookRouter);

app.listen(port, () => {
    console.log("hi from server");

})