'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const userSchema = new mongoose.Schema({
    username:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})

userSchema.virtual('token').get(function () {
    return jwt.sign({username:this.username},SECRET);
});

userSchema.pre('save', async function(){
   if(this.isModified('password')){
       this.password = await bcrypt.hash(this.password,10);
   }
});

userSchema.statics.authenticateBasic = async function(username,password) {
    try {
        const user = await this.findOne({ username });
        const isValid = await bcrypt.compare(password,user.password)
        if(isValid){
            return user;
        } else{
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

userSchema.statics.authenticateBearer = async function(token) {
    try {
      const payload = jwt.verify(token,SECRET);
      const user = await this.findOne({username:payload.username});
      if(user){
          return user;
      } else {
          throw new Error('Invalid username or passwrod');
      }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = mongoose.model('User',userSchema);





