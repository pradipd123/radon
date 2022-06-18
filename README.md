# Next:
-ir is callback function in a middleware
-it passses the control to the subsequent function
-if next () is missed, the control flow will hang

<!--TYPES OF MIDDLEWARE: -->
# Route based Middlewares 
# Global Middlewares

<!-- WAY Middleware -->
- manges the flow of control
- code reusability esp for restrivted routes

<!-- What -->
- site between your router and you HANDLER

<!--e.g-->
route.past('/getHomePage', MiddlewareIfLoggedIn, UserController.homePage)

function MiddlewareIfLoggedIn(req, res , next){
    if loggedIn then call the function/handler which will give us the home feeds
    else res.send("please login or regsiter")
}

<!--- e.g . restricted and open-to-all API's can be handled like below now: -->
# restricted API's
//e.g  restricted and open-to-all API's can be handled like below now:
//router.get("/homePage",mid1, UserController.feeds)
//router.get("/profileDetails",mid1,UserController.profileDetails)
//router.get('/profileDetailsfriendList',mid1,UserController.friendList)
//router.get('/changePassword', mid1, UserController.changePassword)

# Open-to-all API's
//router.get('/termsAndconditions',UserController.termsAndconditons)
//router.get('/regsiter',UserController.regsiter)

<!--GOLBAL MW -->
app.use (midGobal )

# body-parserm function
- getting the post date in req.body
- getting the req.body data as JSON
- providing the header data in req.header
etc etc

<!--JWT BASIC INTRO OF FLOW -->
<!--// LOGIN FLOW -->

you punch userName and password
if correct you get loggedIn.. FB will create a unique secret token and send it to the browser..chrome will save this token in its storage

next time you call an api to get your FB friendList..FB should ask you for a login agian (BUT this does not happen in real life)

after 30 min .. you try to acces your profile page .. ideally FB should ask you to login agin..But this does not happen in real life

<!--with JWT -->
you punch your  userName and password ..Fb will create a unique secret token (unique to every user) and send it to the browser ..Chrome will save this token in storage
next time  I want to acces my friend listt..chrome(frontend)will send this token (alrady stored in chrome storag ) to the API will first call a Middleware which will verify if the token is correct and who does it belang to if token is correct then we will send the friend list of the comcerend person.. else send not authorised

next time you requset your profile page .. token it checked.. if correct you get your profile page, else "not authorised"