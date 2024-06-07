import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './routes/book.route.js'
import userRoute from "./routes/user.route.js"
import cors from 'cors'


const app = express()
app.use(cors());
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000
const DBURI= process.env.MongoDBURI
// Connect to database
try {
  mongoose.connect(DBURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connect to database")
} catch (error) {
  console.log("error",error)
}

// Defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})