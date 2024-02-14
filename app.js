const express = require('express');
const app = express();

// const indexRouter = require('./routes/index');
const daltonRouter = require('./routes/dalton.js');
app.use(express.json());
// app.use('/', indexRouter);
app.use('/dalton', daltonRouter);

 

// app.get('/', function (req, res) {
//   res.send('Are you okay !')
// })

app.listen(8000,()=>{
    console.log("Bonjour bro!")
})