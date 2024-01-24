const Plant = require('./plantsModels')

const getAllPlants =(req,res)={
    Plant.getAll((err,plants)=>{
        if (err) {
            console.error("error GETTING all plants from the database: ",err)
            res.status(500).send(err)
        } else {
            res.json(plants)
        }
    })
}

const getPlantByName =(req,res)=>{
    const name=req.body.name
    Plant.getOneByName(name,(err,plant)=>{
        if (err) {
            console.error("Error GETTING ONE plant by name from the database: ",err)
            res.status(500).send(err)
        } else {
            res.json(plant)
        }
    })
}




module.exports = { getAllPlants , getPlantByName }