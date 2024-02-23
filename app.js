const express = require('express');
const mongoose = require('mongoose');
const app = express();


(async() => {
    try{
        await mongoose.connect("mongodb://localhost/testmongoose");
        console.log("connexion reussie à la base de données");

    }catch(error) {
        console.log(error.message);
    }

})();

// const indexRouter = require('./routes/index');
const daltonRouter = require('./routes/dalton.js');
const user_connect = require('./routes/routeUser.js');
const userjwt = require('./routes/routejwt.js');
app.use(express.json());
// app.use('/', indexRouter);
app.use('/dalton', daltonRouter);
app.use('/auth', user_connect);
// app.use('/routejwt', userjwt);

 

// app.get('/', function (req, res) {
//   res.send('Are you okay !')
// })

app.listen(8000,()=>{
    console.log("Bonjour bro!")
})