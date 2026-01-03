const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors=require('cors');
const app= express();


app.use(
  cors({
    origin: [
      "https://smart-dev-ai-code-reviewer.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/ai',aiRoutes)
module.exports=app