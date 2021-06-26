const mongoose = require('mongoose');
var mongoDBURL =
  'mongodb+srv://new_humphrey1:%21%21%26me.%2Aoa%28%2F@cluster0.ecoln.mongodb.net/Mern-village-cellar';
mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
var dbconnect = mongoose.connection;
dbconnect.on('error', () => {
  console.log(`Mongo DB Connection Failed`);
});
dbconnect.on('connected', () => {
  console.log(`Mongo DB Connection Successfull`);
});
module.exports = mongoose;
