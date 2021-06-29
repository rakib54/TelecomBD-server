const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require ('dotenv').config()
const { MongoClient } = require('mongodb');

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port =process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c4bol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

  const ProductCollection = client.db("TelecomBD").collection("products");
    console.log(process.env.DB_USER,'connected');
});



app.listen(port)