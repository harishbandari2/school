
var express    = require('express');
var router     = express.Router();
bodyParser     = require('body-parser');
var mongoose   = require('mongoose');
var multer     = require('multer');
var upload     = multer({ dest: 'uploads/' })
var fs         = require('fs');

// creating company schema
var studentSchema = mongoose.Schema({
	name       : String,
    lastname   : String,
    rollno     : String,
	department : String,
	username   : String,
	password   : String,
	email      : String,
	contact_no : String,
	image      : String

});

var Student = mongoose.model('Student',studentSchema,'newStudent');

// operations on student schema

router.post('/add',upload.any(),function(req, res) {
	
     console.log("in");
	 
	console.log(req.files);

	if(req.files){
		req.files.forEach(function(file){


			var filename = (new Date).valueOf()+"-"+ file.originalname
			fs.rename(file.path, 'public/images/'+filename, function(err){
				if(err) throw err;
			})

			var newStudent = new Student({
				name       : req.body.name,
				lastname   : req.body.lastname,
				rollno     : req.body.rollno,
				department : req.body.department,
				username   : req.body.username,
				password   : req.body.password,
				email      : req.body.email,
				contact_no : req.body.contact_no,
				image      : filename    
		


			});

			newStudent.save(function(err, docs){
				if(err) throw err;
				console.log('Saved');
				res.json(docs);
			});

		});
	}
	
	
	


	

});

router.post('/login',function(req, res,next) {
	var newStudent = new Student({

		username   : req.body.username,
		password   : req.body.password
	});

	
	Student.findOne({'username':newStudent.username},function(err, docs){
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

//view by id

router.post('/view',function(req, res,next) {
	console.log(req.body.rollno);
	var newStudent = new Student({

		rollno   : req.body.rollno,
	});

	
	Student.findOne({'rollno':newStudent.rollno},function(err, docs){
		if(err) throw err;
		//console.log(docs);
		if(docs){
		res.json(docs);
//res.render('/register.html');
                
		}
			           
			else{
			    console.log("Incorrect Password");
			}
		
		
	});
});
////////////////
router.post('/update',function(req, res,next) {
	console.log(req.body.rollno);
	var newStudent = new Student({

		rollno   : req.body.rollno,
	});

	
	Student.findOne({'rollno':newStudent.rollno},function(err, docs){
		if(err) throw err;
		
		if(docs){		
               
                res.json(docs);

                
		}
			           
			else{
			    console.log("Incorrect Password");
			}
		
				
	});
});
///////////
router.put('/updatenow/',function(req,res){
	console.log(req.body.name);
	Student.update({rollno:req.body.rollno}, {"$set":{
		name       : req.body.name,
        lastname   : req.body.lastname,
        rollno     : req.body.rollno,
		department : req.body.department,
		username   : req.body.username,
		password   : req.body.password,
		email      : req.body.email,
		contact_no : req.body.contact_no

	}}, function(err,data){
		console.log(data);
		res.json(data);
		
	});
});





////////////
router.delete('/delete/',function(req,res){
	Student.remove({rollno:req.body.rollno},function(err, docs){
		res.json(docs);
	});
});


///////


router.get('/all',function(req,res){
	Student.find({},function(err,docs){
		res.json(docs);
	    
	});
});




//});

module.exports = router;