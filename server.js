var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/movieListModel'),
  bodyParser = require('body-parser');


mongoose.connect(connectionString)
.then(() => {
  console.log("connection successful to database");
})
.catch(() => {
  console.log("connection to database failed");
}); 

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/movieListRoutes'); 
routes(app); 


app.listen(port);

console.log('Movie RESTful API server started on: ' + port);