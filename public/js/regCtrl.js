school.controller('regCtrl',function ($scope, $http, $location) {
	$scope.name="";
	$scope.addRmsg="";

	/* HTTP */
	$http({
		method: 'GET',
		url   : '/teacher/all'
	}).then(function(response){
		$scope.data=response.data;
		
	},function(err){
		console.log('err');
	});


	$scope.addTeacher = function(t){
		
		var teacher = {
		name       : t.firstname,
		lastname   : t.lastname,
		department : t.department,
		username   : t.username,
		password   : t.password,
		email      : t.email,
		contact_no : t.contact_no
        };
        
		$http({
			method : 'POST',
			url    : '/teacher/add',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson(teacher)
		}).then(function(response){
			$scope.addRmsg="Successfully Added";
            t.firstname="";
            t.lastname="";
            t.department="";
            t.username="";
            t.password="";
            t.email="";
			t.contact_no="";
			$timeout(function(){
				$location.path('/');
			},2000);
		});
	}; 

} );