const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dinoSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Diet: {
            type: String,
            // required: true
        },
     Tameable: {
            type: String,
            required: true
        },
        Rideable: {
            type: String,
            required: true
        },
        Temperament: {
            type: String,
            // required: true
        }
    }

)

module.exports = mongoose.model("Dino", dinoSchema)