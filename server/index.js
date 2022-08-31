import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose ';

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
mongoose.
connect(
  "mongodb+srv://MediaSocial:CnS7lEz0HEMm0TPL@cluster0.fgzsj.mongodb.net/?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifieldTopology: true})
  .then(()=>app.listen(5000, ()=>console.log("Listening")));