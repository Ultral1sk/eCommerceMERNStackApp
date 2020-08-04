const mongoose    = require('mongoose');
const bcrypt      = require('bcrypt-nodejs')
const jwt         = require('jsonwebtoken')
const SALT        = 10;

require('dotenv').config()


const userSchema = mongoose.Schema({

  email : {
    type      : String,
    required  : true,
    trim      : true,
    unique    : 1
  },

  password : {
    type      : String,
    required  : true,
    minlength : 5

  },

  name : {
    type      : String,
    required  : true,
    maxlength : 20
  },

  lastname : {
    type      : String,
    required  : true,
    maxlength : 20
  },

  cart : {
    type      : Array,
    default   : [],
  },

  history : {
    type      : Array,
    default   : []
  },

  role : {
    type      : Number,
    default   : 0    // not administrator if its another numbert it'll have the role admin
  },

  token : {
    type      : String
  }

})



// before we do anything with the schema we want to do smth
// next will be called after we hash the password
userSchema.pre('save', function ( next ) {
  var user = this;   // this is because we want to refer to the this in the schema not in the function 


  // with this we are saying if the user password is modified rehash the password
  // else just 
  if( user.isModified('password') ) {
    bcrypt.genSalt(SALT, function ( err, salt ) {
      if( err ) return next(err)
  
      bcrypt.hash( user.password, salt, null, function ( err, hash ) {
  
        if( err ) return next( err )
        user.password = hash
        next()
      });
    });
  } else {

    next()
    
  }
});


// manually created methods which we can use in the schema later
userSchema.methods.comparePassword = function( candiatePassword, cb ) {

  bcrypt.compare(candiatePassword,  this.password, function( err, isMatch ){
    if( err ) return cb( err )
    cb(null, isMatch)
  })


}

userSchema.methods.generateToken = function(cb){
  var user = this
  var token = jwt.sign(user._id.toHexString(), process.env.SECRET);
  user.token = token

  user.save(function( err, user ) {
    if( err )  return cb( err )
    cb( null, user )
  })
}


userSchema.statics.findByToken = function( token, cb ) {
   var user = this;

   // verifying the token we are going to receive with thee token insnde our file,
   // then inside the decoded payload we have the _id
   jwt.verify(token, process.env.SECRET, ( err, decode ) => {
     console.log(`inside decode `,decode)
    user.findOne({"_id": decode, "token": token}, ( err, user ) => {
      
      if( err ) return cb( err )
      cb(null, user)

    })
   })

}



const User = mongoose.model('User', userSchema);

module.exports = User
