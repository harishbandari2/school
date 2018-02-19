
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser');
var mongoose = require('mongoose');

// creating company schema
var teacherSchema = mongoose.Schema({
	name       : String,
	lastname   : String,
	department : String,
	username   : String,
	password   : String,
	email      : String,
	contact_no : String

});

var Teacher = mongoose.model('Teacher',teacherSchema,'newTeacher');

// operations on student schema

router.post('/add',function(req, res) {
	var newTeacher = new Teacher({
		name       : req.body.name,
		lastname   : req.body.lastname,
		department : req.body.department,
		username   : req.body.username,
		password   : req.body.password,
		email      : req.body.email,
		contact_no : req.body.contact_no


	});

	console.log(newTeacher);
	newTeacher.save(function(err, docs){
		if(err) throw err;
		console.log('Saved');
		res.json(docs);
	});
});

router.post('/login',function(req, res) {
	var newTeacher = new Teacher({

		username   : req.body.username,
		password   : req.body.password
	});

	
	Teacher.findOne({'username':newTeacher.username},function(err, docs){
		if(err) throw err;
		//console.log(docs);
		if(docs){
			if(docs.password === newTeacher.password){
				console.log("success");
				var msg=true;
				res.json(docs);
               
			}               
			else{
			    console.log("Incorrect Password");
			}
		}
		
	});
});
router.get('/all',function(req,res){
	Teacher.find({},function(err,docs){
		res.json(docs);
	    console.log(docs);
	});
});

module.exports = router;