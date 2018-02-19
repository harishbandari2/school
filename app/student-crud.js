
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser');
var mongoose = require('mongoose');

// creating company schema
var studentSchema = mongoose.Schema({
	name       : String,
    lastname   : String,
    rollno     : String,
	department : String,
	username   : String,
	password   : String,
	email      : String,
	contact_no : String

});

var Student = mongoose.model('Student',studentSchema,'newStudent');

// operations on student schema

router.post('/add',function(req, res) {
	var newStudent = new Student({
		name       : req.body.name,
        lastname   : req.body.lastname,
        rollno     : req.body.rollno,
		department : req.body.department,
		username   : req.body.username,
		password   : req.body.password,
		email      : req.body.email,
		contact_no : req.body.contact_no


	});

	
	newStudent.save(function(err, docs){
		if(err) throw err;
		console.log('Saved');
		res.json(docs);
	});
});

router.post('/login',function(req, res,next) {
	var newStudent = new Student({

		username   : req.body.username,
		password   : req.body.password
	});

	
	Teacher.findOne({'username':newStudent.username},function(err, docs){
		if(err) throw err;
		//console.log(docs);
		if(docs){
			if(docs.password === newStudent.password){
                console.log("success");
                res.json(docs);
                res.render('/register.html');
                
               
			}               
			else{
			    console.log("Incorrect Password");
			}
		}
		
	});
});
router.get('/all',function(req,res){
	Student.find({},function(err,docs){
		res.json(docs);
	    
	});
});
router.get('/:id',function(req,res){
	//Student.find({},function(err,docs){
        //res.json(docs);
        console.log(req.params.id);
	    
	});
//});

module.exports = router;