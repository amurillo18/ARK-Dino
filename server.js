const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

 const port = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Amurillo:Alex2015@cluster0.uvmcw4x.mongodb.net/ARKdb?retryWrites=true&w=majority", () => console.log('connected to database'))

app.use('/dinos', require('./routes/dinos'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
