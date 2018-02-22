school.controller('loginCtrl',function ($scope, $http, $location,$timeout) {
	$scope.name="";
	$scope.addRmsg="";

	/* HTTP */


	$scope.loginTeacher = function(t){
		
        var msg="";

		var teacher = {
		username   : t.username,
		password   : t.password,
		};
		
        
		$http({
			method : 'POST',
			url    : '/teacher/login',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson(teacher)
		})

		.then(function(response){
			console.log("in");
		   console.log(response.data);
		   var data=response.data;
		   
			
			if(data.retStatus === 'Success') {
				
				
				// not sure what did you mean by ('/team' && '/team' !== "")
				// if('/team' && '/team' !== "") {
				if (data.redirectTo && data.msg == 'Just go there please') {
					window.location = data.redirectTo;
				}
			}
			
				
				
			
		});
		
            
		
	
		
	}; 

} );