const {pgTable,uuid,varchar,description}=require('drizzle-orm/pg-core');
const authorsTable=pgTable("authors",{
    id:uuid().primaryKey().defaultRandom(),
    firstName:varchar({length:55}).notNull(),
    lastName:varchar({length:55}),
    email:varchar({length:55}).notNull().unique(),
})
module.exports=authorsTable;