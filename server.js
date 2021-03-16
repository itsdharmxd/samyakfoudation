//package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const cors =require('cors')
//api
const members=require('./routes/api/members')
const main = require('./routes/api/main');
const events= require('./routes/api/events')
const admin = require('./routes/api/admin')
const user = require('./routes/api/user')

// Body parser middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport)



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dharmesh:8910902686@samyakfoundation.ohj5v.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


//Config
const db = require('./config/keys').mongoURI;
console.log(db);


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => console.log("mongo connect")).catch((err) => console.log('mongo not connect'+err))

app.use('/api/', main);
app.use('/api/admin', admin);
app.use('/api/events', events);
app.use('/api/members', members);
app.use('/api/user',user)


const Port = process.env.PORT || 5000;

app.listen(Port,()=>console.log(`server is listening to ${Port}`))
