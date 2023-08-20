const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname,"public/css")));


const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf8'));

app.get('/',(req,res)=>{
    res.render("home",{title:'Home',tours});
});



app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})