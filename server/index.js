const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const route=require('./Routes/CropsRoute')
const mongoose=require('mongoose')
const dotenv= require("dotenv")
const {spawn} =require('child_process');
const { log } = require('console');


const python= spawn('python',['ML.py'])

python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
  console.log(dataToSend);
  
});
python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);

});

app.use(cors({
    origin:"*",
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Plant Disease Detection API!');
});
const MONGOURL=process.env.MONGO_URL;
app.use("/cropdetail",route);


mongoose.connect(MONGOURL)
.then(()=>{
    console.log("Database connected");
    app.listen(PORT,()=>{console.log("Listening:"+PORT)})
})
.catch(err=>console.log(error))


