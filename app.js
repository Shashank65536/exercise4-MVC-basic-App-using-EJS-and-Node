const express = require('express');
const morgan = require('morgan');


const app = express();


let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));


//routes
app.get('/', (req, res) => {
    res.render('index');
})


//server
app.listen(port,host,()=>{
    console.log("Server is running");
});


