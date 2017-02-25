var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var conn;
var pg = require('pg');
pg.default.ssl = true;
var str = "postgres://ywnodfgeebqfxe:ad885309fb8aac545475b7de44d1b1bb2e8421a7aac7ebae3c18316b8ab90111@ec2-23-21-204-166.compute-1.amazonaws.com:5432/d84j9nfcrovrde"
var connectionString = "pg://ywnodfgeebqfxe:ad885309fb8aac545475b7de44d1b1bb2e8421a7aac7ebae3c18316b8ab90111@ec2-23-21-204-166.compute-1.amazonaws.com/d84j9nfcrovrde"
pg.connect(connectionString, function(err,client,done){
	if(err){
		console.log(err);
	}
	conn = client;
})

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.post('/insertProj', function(req,res){
	console.log("working")
	var body = req.body
	console.log("Body: ", body)
	var stmt =
})