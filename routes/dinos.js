const express = require("express")
const dinoRouter = express.Router()
const Dino = require("../models/dinos")

// get all dinos
dinoRouter.get("/", (req, res, next) => {
    Dino.find((err, dinos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dinos)
    })
})
// add new dino
dinoRouter.post("/", (req, res, next) => {
    const newDino = new Dino(req.body)
    newDino.save((err, savedDino) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedDino)
    })
})
// delete a dino from the database
dinoRouter.delete("/:dinoId",(req, res) => {
    Dino.findOneAndDelete({_id: req.params.dinoId},(err, deletedDino) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedDino.Name} from the database`)
    })
})
// update a dino
dinoRouter.put("/:dinoId",(req, res) => {
    Dino.findOneAndUpdate({_id: req.params.dinoId}, req.body, {new: true},(err, updatedDino) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedDino)
    })
})

// get one
dinoRouter.get('/:dinoId',(req, res, next)=> {
    Dino.findOne({_id: req.params.dinoId}, (err, dino) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(dino)
    })
})

module.exports = dinoRouter