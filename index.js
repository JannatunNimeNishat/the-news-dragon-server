const express = require('express')
const app = express();
const port = process.env.PORT ||  5000;
//categories
const categories = require('./data/categories.json');
//cors
const cors = require('cors')

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Dragon News is running');
})

//categories
app.get('/categories',(req,res)=>{
    res.send(categories);
})


app.listen(port, ()=>{
    console.log(`Dragon news API is running on Port: ${port}`)
})

