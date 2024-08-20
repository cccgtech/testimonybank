// const Testimony = require('./models/Testimony');

const express = require('express');
const mongoose = require('mongoose');
const TestimonyRoute = require('./routes/Testimony')
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Use routes
app.use('/api/testimony', TestimonyRoute);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port', process.env.PORT, '!!!');
        });        
    })
    .catch((error)=>{
        console.log(error)
    })


