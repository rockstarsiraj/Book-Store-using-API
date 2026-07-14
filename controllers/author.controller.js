const db=require("../DB");
const authorsTable=require('../models/author.model');
const booksTable=require('../models/book.model');
const { eq } = require('drizzle-orm');
exports.author=async(req,res)=>{
    const authors=await db.select().from(authorsTable);
    return res.json(authors);
}
exports.authorById=async(req,res)=>{
    const [author]=await db.select().from(authorsTable).where(eq(authorsTable.id,req.params.id));
    if(!author){
       return res.status.json(`author with ${req.params.id} deosnot exists`);
    }
    return res.json(author);
}
exports.createAuthor=async(req,res)=>{
    const {firstName,lastName,email}=req.body;
  const [result]=  await db.insert(authorsTable).values({
        firstName,lastName,email
    }).returning({
        id:authorsTable.id
    })
    return res.json({message:`author is created`,id:result.id});
}
exports.BooksByAuthor=async(req,res)=>{
    const books=await db.select().from(booksTable).where(eq(booksTable.authorId,req.params.id),);
    return res.json(books);
}
