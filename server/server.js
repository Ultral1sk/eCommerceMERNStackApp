require("dotenv").config();
const express      = require('express');
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT         = process.env.PORT || 3002;
const connectDB = require('./config/db');
const app          = express();

connectDB()


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Models


//=====================
//       USERS
//=====================

app.post('/app/users/register', ( req, res ) => {

  res.status(200)

})


app.listen(PORT, () => {
    console.log(`server is listening the port :`, PORT)
});