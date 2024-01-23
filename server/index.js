import express from "express"
const app = express()

const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Testing APIs')
})


app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`))
