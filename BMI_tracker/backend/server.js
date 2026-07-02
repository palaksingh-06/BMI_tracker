const express = require("express");   //importing the express library 
const cors = require("cors");   //importing cors 
require("dotenv").config();  //making use of env for passwords

const app = express();  //creating the server 

app.use(cors());     //allow react to communicate via requests
app.use(express.json());   //converting the json to js objects 

app.get("/", (req, res) => {
  res.send("BMI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {       
  console.log(`Server running on port ${PORT}`);
});