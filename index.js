var express = require('express');
var app = express();
//var mysql = require('mysql');
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json())
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
const client = new pg.Client(connectionString);
client.connect();
router.post('insertProj', (req, res, next) =>{
	const results = [];
	const data = {text: req.body.text, complete:false};
	pg.connect(connectionString, (err,client,done)=>{
		if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query('INSERT INTO project(project, client, skills, focus_area, role, deadline, duration) values($1, $2, $3,$4,$5,$6,$7)',
    [data.text, data.complete]);
    query.on('end', () => {
      done();
      return res.json(results);
    });

})
/*pg.connect(connectionString, function(err,client,done){
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
	var stmt = "INSERT INTO project(project, client, skills, focus_area, role, deadline, duration) VALUES (?,?,?,?,?,?,?)"
	var inserts = [body.project, body.client, body.skill, body.focus, body.role, body.deadline, body.duration]
	var stmt = mysql.format(stmt, inserts)
	conn.query(stmt, function(err, result){
		if (err){
			console.error("Error: ", err)
			return res.send({
				error:true,
				mesg:"Could not insert data to database"
			})
		}
		res.send({
			success:true
		})
	})
})

app.post('/insertEmployee', function(req,res){
	console.log("working")
	var body = req.body
	console.log("Body: ", body)
	var stmt = "INSERT INTO employee(name, skills, focus_area, status, project, role) VALUES (?,?,?,?,?,?)"
	var inserts = [body.fullname, body.skills, body.focus_area, body.statuss, body.project, body.role]
	var stmt = mysql.format(stmt, inserts)
	conn.query(stmt, function(err, result){
		if (err){
			console.error("Error: ", err)
			return res.send({
				error:true,
				mesg:"Could not insert data to database"
			})
		}
		res.send({
			success:true
		})
	})
})

app.post('/finishedProj', function(req,res){
	console.log("working")
	var body = req.body
	console.log("Body: ", body)

	var stmt = "SELECT project.project FROM project INNER JOIN employee ON project.project = employee.project WHERE project.deadline < current_date AND employee.status = 'new'"
	var inserts = []
	var stmt = mysql.format(stmt, inserts)
	conn.query(stmt, function(err, result) {
	if (err){
		console.error("Error: ", err)
		return res.send({
			error:true,
			mesg:"Could not delete data from database"
		})
	}
	console.log(result)
	var ret = JSON.stringify(result);
	res.send(ret);

	})

})*/










