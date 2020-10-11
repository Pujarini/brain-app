const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('../src/controllers/registeruser');
const signin = require('../src/controllers/signInuser');
const profile = require('../src/controllers/profile');
const image = require('../src/controllers/imageDetect');

const db = knex({
  // connect to your own database here
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port:5433,
    user : 'postgres',
    password : '',
    database : 'smart-brain-db'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signIn', (req,res)=>{signin.handleSignIn(req,res,db, bcrypt)})
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(5000, ()=> {
  console.log('app is running on port 5000');
})
