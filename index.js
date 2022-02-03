const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kjsj20:abcd1234@cluster0.vsg5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true, useUndefiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})