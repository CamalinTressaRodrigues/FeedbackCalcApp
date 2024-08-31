const mongoose = require('mongoose');
mongoose.set('debug', true);
require('dotenv').config();

const db=mongoose.connect(process.env.MONGO_URI || "mongodb+srv://camrodrigues12:beub6Ba4k2GY79KY@projects.xgevs.mongodb.net/?retryWrites=true&w=majority&appName=Projects")
.then(() => {
  console.log("DB is connected");
})
.catch((error) => {
  console.error('Error in connection', error);
});
mongoose.set('debug', true);
module.exports = db;