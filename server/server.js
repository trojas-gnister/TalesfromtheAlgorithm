const express = require("express");
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const apiKey = process.env.API_KEY
const bcrypt = require('bcrypt')
const path = require('path');

mongoose.connect('mongodb://localhost:27017/algoDB', {useNewUrlParser: true})

// Serve static files from the React app
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true, 
    unique: [true, "Please input an e-mail"]
    },
    password: {
    type: String,
    required: [true, "Please input a password"]
  } 
})

userSchema.pre('save', function(next){
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, 10, (error, hash) => {
    if (error) {
      return next(error)
    }
    user.password = hash;
    next()
  })
})

userSchema.methods.authenticate = function(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password)
}

const User = mongoose.model("user", userSchema)

const testUser = new User({
  email: "test@mail.com",
  password: "password123"
})

testUser.save()



async function startServer() {
  const app = express();
  app.use(express.static('public'));

  let options = {
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    instructions: `You are ChatGPT, a large language model trained by OpenAI.`,
    model: "text-davinci-003",
    stop: "",
  }

  const { default: ChatGPT } = await import("chatgpt-official");

  let bot = new ChatGPT(apiKey, options);

  let response = await bot.ask("think of 5 funny and clever names about generative AI and storys. the AI will be fed prompts by the user and create custom stories. make it edgar allan poe themed. thanks ");
  console.log(response);

  let conversationId2 = "another conversation name";
  let response2 = await bot.ask("Hello?", conversationId2);
  console.log(response2);

  app.listen(PORT, () => {
    console.log(
      `
      ==============================
      "Online at ${PORT}, Server is."  
                  __.-._                   
                  '-._"7'  
                   /'.-c          
                   |  /T   
                  _)_/LI     
      ==============================
      
    `);
  });
}

startServer();
