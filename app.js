const express = require('express');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');

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

app.use('/stories', storyRoutes);

//server
app.listen(port,host,()=>{
    console.log("Server is running");
});


