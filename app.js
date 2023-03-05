const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mygrh',
{   useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false    
}, (err) => {
    if (err) {
        console.log('Error..!! Unable to connect to database')
    }    
    else {
        console.log('successfully connected to database');
    }
});

const employeeRouter = require('./routes/Employee');
app.use('/employee',employeeRouter);

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(5000, () => {
    console.log('express server started');
});