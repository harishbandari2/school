school.controller('studentCtrl',function ($scope, $http, $location) {
	$scope.name="";
	$scope.addRmsg="";

	/* HTTP */
	$http({
		method: 'GET',
		url   : '/student/all'
	}).then(function(response){
		$scope.data=response.data;
		
		
	},function(err){
		console.log('err');
	});


	$scope.addStudent = function(s){
        		
		var student = {
		name       : s.firstname,
        lastname   : s.lastname,
        rollno     : s.rollno,
		department : s.department,
		username   : s.username,
		password   : s.password,
		email      : s.email,
		contact_no : s.contact_no
        };
       
        
		$http({
			method : 'POST',
			url    : '/student/add',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson(student)
		}).then(function(response){
			$scope.addRmsg="Successfully Added";
            s.firstname="";
            s.rollno ="";
            s.lastname="";
            s.department="";
            s.username="";
            s.password="";
            s.email="";
            s.contact_no="";
		});
	}; 

} );