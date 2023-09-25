const express = require("express")
const app = express();

const tasks = require('./routers/tasks');
// const router = require("../toto/routers/tasks");

const notFound = require('./middleware/not-found')

const ErrorHandler = require('./middleware/error-handler')


const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/dummy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected! successfull-------- '));

app.use(express.json());


app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(ErrorHandler)



app.get('/', (req, res) => {
  res.send("yeskbkjbkajbdaksjdbsa")
})




app.listen(3000, console.log("yes done ------"))


