const express=require("express");
const authorsTable=require('../models/author.model');
const db=require("../DB");

const controller=require('../controllers/author.controller')
const router=express.Router();
router.get("/",controller.author);
router.get("/:id",controller.authorById);
router.post("/",controller.createAuthor);
router.get("/:id/books",controller.BooksByAuthor);
// router.delete("/:id",async(req,res)=>{
//     await db.delete(authorsTable).where(eq(authorsTable.id,req.params.id));
//     return res.json()

// })





module.exports=router;