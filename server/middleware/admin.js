let admin = ( req, res, next ) => {
  // if user is trying to post something and is not an admin
    if( req.user.role === 1 ) {
      return res.send('For Administrators only');
    
    }
    

    next()
}

module.exports =  admin 