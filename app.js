var express    = require('express');
var app		   = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var path       = require('path');
var multer     = require('multer');
var upload = multer({ dest: 'uploads/' })


var dbHost = 'mongodb://localhost:27017/school';
mongoose.connect(dbHost,function(err){
	if(err) console.log('error');
	else console.log('connected');
});

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({}));

app.use(function (req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-type, Accept,Authorization,sid");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
	next();
});


// custom config
var teacher= require('./app/teacher-crud');
var student = require('./app/student-crud');
app.use('/teacher',teacher);
app.use('/student',student);

app.use(express.static(path.join(__dirname + '/public')));

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');




app.use(function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});
require('./app/routes')(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
	console.log('server is running on '+PORT);
});