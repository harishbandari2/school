
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt')

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
	  
	bcrypt.genSalt(10, (err, salt) =>{
		bcrypt.hash(newTeacher.password, salt, (err ,hash)=>{
		 
			newTeacher.password=hash;		  
		  
		  newTeacher.save(function(err, docs){
			if(err) throw err;
			console.log('Saved');
			res.json(docs);
		});
		});
	  });

});

router.post('/login',function(req, res) {
	var newTeacher = new Teacher({

		username   : req.body.username,
		password   : req.body.password
	});

	console.log(newTeacher.username);


	Teacher.findOne({'username':newTeacher.username},function(err, docs){
		if(err) throw err;
		
		if(docs){
			if(bcrypt.compareSync(newTeacher.password, docs.password)){
				retStatus = 'Success';				
				res.send({
				retStatus  :  retStatus,
				redirectTo : '/tdashboard',
				msg        : 'Just go there please' // this should help
			  });
			}
		}
		
	});
});
module.exports = router;