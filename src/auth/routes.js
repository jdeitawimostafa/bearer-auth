'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const express = require('express');
const server = require('../server.js');
const User = require('../models/users.js');
const mongoose = require('mongoose');
const router = express.Router();
const basicAuth = require('../middleware/basic.js');
const bearerAuth = require('../middleware/bearer.js');
router.post('/signup',signup);
router.post('/signin',basicAuth,signin);
router.get('/users',bearerAuth,getUser)

async function signup(req,res,next){
  try {
    
    const user = new User(req.body);
    const insert = await user.save();
    res.status(201).json({
        user:insert,
        token:insert.token
    });
  } catch (error) {
    next(error.message);
  }
}

function signin(req,res,next){
  console.log(req.user);
  res.status(200).json({
      user:req.user,
      token:req.user.token
  });
  console.log(req.user);
  console.log(req.user.token);
  
}

async function getUser(req,res){
    const users = await User.find({});
    const list = users.map(items => items.username);
    res.status(200).json(list);
}



module.exports = router; 
