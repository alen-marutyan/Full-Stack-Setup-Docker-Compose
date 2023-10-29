const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 8080;


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

const mongoose = require('mongoose');
const mongoURI = 'YOUR_MONGODB_URI';

mongoose.connect('mongodb://mongo:27017/Test-db-28', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check for a successful database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});