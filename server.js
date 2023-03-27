const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require("path")

 const port = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use('/dinos', require('./routes/dinos'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
