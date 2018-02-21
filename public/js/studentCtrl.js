school.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

school.controller('studentCtrl',function ($scope, $http,$route, $location) {
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
    
    
//file based post in angular

	$scope.addStudent = function(s){
		
		$scope.student=s;

		var formData = new FormData;
		for(key in $scope.student){

			formData.append(key,$scope.student[key]);
		}

		var file = $('#file')[0].files[0];
		console.log(file, "file...");

		formData.append('image',file);

		$http.post('/student/add', formData,{
			transformRequest : angular.identity,
			headers:{
				'Content-Type' : undefined
			}

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

	$scope.del = function(s){


		$http({
		    method : 'DELETE',
			url    : '/student/delete',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson({rollno:s})
	}).then(function(response){
		$scope.data="deleted";
		
	},function(err){
		console.log('err');
	});
	$route.reload();

	}; 



} );