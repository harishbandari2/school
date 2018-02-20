var express    = require('express');
var app		   = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var path       = require('path');


var dbHost = 'mongodb://localhost:27017/school';
mongoose.connect(dbHost,function(err){
	if(err) console.log('error');
	else console.log('connected');
});

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({}));


// custom config
var teacher= require('./app/teacher-crud');
var student = require('./app/student-crud');
app.use('/teacher',teacher);
app.use('/student',student);

app.use(express.static(path.join(__dirname + '/public')));
app.use(function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});
require('./app/routes')(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
	console.log('server is running on '+PORT);
});