school.controller('loginCtrl',function ($scope, $http, $location,$window) {
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


	$scope.loginTeacher = function(t){
		
		var teacher = {
		username   : t.username,
		password   : t.password,
		};
		
        
		$http({
			method : 'POST',
			url    : '/teacher/login',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson(teacher)
		}).then(function(response){
			$scope.addRmsg="Successfully loged";
			console.log(docs);
			if(docs){
				$window.location.href = "http://www.google.com";
			}
			
            

		});
	}; 

} );