const express = require('express');
const mongoose = require('mongoose');
const route = require('../src/routes/routes');
const cors = require('cors')


const app = express();

app.use(express.json());

app.use(cors())

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});