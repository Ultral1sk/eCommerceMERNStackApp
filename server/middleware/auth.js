const User = require('../models/user') 

console.log(`comming from auth`,User)

// then we pass it as a middleware at the server.js auth route
let auth = ( req, res , next) => {


  
  let token = req.cookies.w_auth;

  // function is created in the schema and imported here
  // this function will check if there is a  token inside the cookies, if there is return the user data if not nothing
  User.findByToken(token, ( err, user ) => {

    if( err ) throw err

    if( !user ) return res.json({
      isAuth : false,
      error : true
    });


    req.token = token;
    req.user = user;

    next()

  });

  let admin = ( req, res, next ) => {
    // if user is trying to post something and is not an admin
    
  }
  
}


module.exports = auth  