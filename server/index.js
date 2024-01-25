import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
const PORT = 8080;

dotenv.config()

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
};


//middlewares
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Testing APIs')
})


app.listen(PORT, () => {
  connectDB()
  console.log(`Connected to backend on PORT: ${PORT}`)
})
