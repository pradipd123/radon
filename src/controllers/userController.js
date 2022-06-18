const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const basicCode= async function(req, res) {
    let tokenDataInHeader = req.headers. token
    console.log(tokenDataInHeader)

    console.log ("HEADER DATA ABOVE")
    console.log("hey man congrats you have reached the Handler")
       res.send( {msg: "this is coming from controller (handler)" })
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

module.exports.basicCode= basicCode