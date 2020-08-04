require("dotenv").config();
const express      = require('express');
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT         = process.env.PORT || 3002;
const connectDB    = require('./config/db');
const app          = express();

connectDB()


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Models

const  User  = require(`./models/user`)



//middleware
const  auth  = require('./middleware/auth');
const { json } = require("body-parser");



//=====================
//       USERS
//=====================

app.get('/api/users/auth', auth, ( req, res ) => {

  res.status(200).json({
      isAdmin   : req.user.role === 0 ? false : true,
      isAuth    : true,
      email     : req.user.email,
      name      : req.user.name,
      lastname  : req.user.lastname,
      role      : req.user.role,
      cart      : req.user.cart,
      history   : req.user.history

  })

});

app.get('/api/users/logout', auth, ( req, res ) => {

  // since we have the data inside the AUTH middleware we just update the token inside the user to ''
  // and we are going to be kicked out or logged out automatically
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '' },
    ( err, doc ) => {
      if (err) return res.json({ success: false, err })
      else     return res.status(200).send({
        success: true
      })
    }
    )

})

app.post('/api/users/register', ( req, res ) => {

  const user = new User(req.body)

  user.save(( err, doc ) => {
    if( err ) return res.json({ success : false, err })
    res.status(200).json({
      success : true,
      // userdata : doc
    })
  })

})


app.post('/api/users/login', ( req, res ) => { 

    const { email, password  } = req.body

    User.findOne({ 'email' : email }, ( err, user ) => {
      if( !user ) return res.json({ loginSuccess: false, message : 'Auth failed, email not found' })


      user.comparePassword( password, ( err, isMatch) => {
        if( !isMatch ) return res.json({ loginSuccess : false, message : 'Wrong password'})
        
        user.generateToken(( err, user ) => {
          if( err ) return res.status( 400 ).send( err )
          res.cookie( 'w_auth',  user.token ).status(200).json({
            loginSuccess: true
          })
          
        })
 
      });

    });


});

app.listen(PORT, () => {
    console.log(`server is listening the port :`, PORT)
});