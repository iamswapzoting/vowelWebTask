const express = require('express');
const mongoose = require('mongoose');
const route = require('../src/routes/routes');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});