
// Second String
// Application script that runs after command 'npm start'

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
  console.log("HTTP server listening on port 3000");
});


var path = require("path");
// var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose =  require("mongoose");
// var $       = require( 'jquery' );
// var dt      = require( 'datatables.net' );
// var buttons = require( 'datatables.net-buttons' );
var pg = require('pg');
var conString = "localhost://postgres:password@localhost:5432/postgres";
// var args = process.argv
// var PGHOST = args[2]
// var PGUSER = args[3]
// var PGPASSWORD = args[4]
// var PGPORT = args[5]
// var PGDBNAME = args[6]

// npm start hostname username password port database
// var client = new pg.Client({
//   user: args[3],
//   host: args[2],
//   database: args[6],
//   password: args[4],
//   port: args[5],
// });

// var client = new pg.Client(conString);
// client.connect();
// // callback
// QUARTERBACK
// SELECT player.first_name, player.last_name, player.team, player.position,

// SELECT player.full_name, SUM(play_player.passing_yds) AS passing_yds
// FROM play_player
// LEFT JOIN player ON player.player_id = play_player.player_id
// LEFT JOIN game ON game.gsis_id = play_player.gsis_id
// WHERE game.season_year = 2012 AND game.season_type = 'Regular'
// GROUP BY player.full_name
// client.query('SELECT * FROM public.player ORDER BY player_id ASC LIMIT 100', (err, res) => {
//   if (err) {
//     console.log(err.stack);
//   } else {
//     console.log(res.rows[0]);
//   }
// });
// // promise
// client.query('SELECT * FROM public.player ORDER BY player_id ASC LIMIT 100')
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack));

var routes = require("./routes/index");
var users = require("./routes/users");


//var app = express();

var mongodbUriFootball = "mongodb://pledgemaster:skilodge@ds021356.mlab.com:21356/nfldb";
var mongodbUriSoccer = "mongodb://pledgemaster:skilodge@ds123050.mlab.com:23050/soccer";
//connecting to database

/*mongoose.createConnection(mongodbUriFootball);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on("open", function(){
  console.log("mongodb is connected!!");
});*/
/*db.once('open', function callback (){
  
  //collec.insert({name: 'Boston Red Sox'});

  /*var teamCollec = db.collection('Teams');
  teamCollec.find().toArray(function(err, Teams){
    if(err) {return console.dir(err);}
    console.log(Teams);
  });
  

  //collec.remove({name: 'yankees'});
  /*collec.find().toArray(function(err, Teams){
    if(err) {return console.dir(err);}
    console.log(Teams);
  });
    
  db.close(function (err){
    if(err) throw err;
  });
  
});*/

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*app.use('/', function(req, res) {
  var teamCollec = db.collection('Teams');
  teamCollec.find().toArray(function(err, Teams){
    if(err) {return console.dir(err);}
    console.log(Teams);
    res.render('views/index.ejs',{data:Teams}); 
  });
});*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);
// app.use('/teams', users);
//app.use('/stats', routes);
//app.use('/projected',routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

/*app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});*/

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});



module.exports = app;