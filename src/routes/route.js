const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//const mid1= function(req, res, next) {
//    console.log("Hi I am a middleware named Mid1")
//    logic
//    let loggedIn = true
//  
 //   if (loggedIn== true) { 
//        console.log("OK LOGGED IS TRUE NOW")
//        next()   
  //  }
//    else {
//      res.send( "Please login or register" )
//    }
  
//  }
  
  

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//e.g  restricted and open-to-all API's can be handled like below now:
//router.get("/homePage",mid1, UserController.feeds)
//router.get("/profileDetails",mid1,UserController.profileDetails)
//router.get('/profileDetailsfriendList',mid1,UserController.friendList)
//router.get('/changePassword', mid1, UserController.changePassword)

//router.get('/termsAndconditions',UserController.termsAndconditons)
//router.get('/regsiter',UserController.regsiter)

router.get ("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)





//router.post("/getHomePageFeeds", authCheck, feedController.createHomePageFeeds)


//MOMENT JS
const moment = require('moment');
const userModel = require('../models/userModel');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;
