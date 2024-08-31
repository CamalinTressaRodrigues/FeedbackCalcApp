const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');
app.use(morgan('dev'));
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
require('./db/mongoDb');







app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT ${process.env.PORT}`);
})
