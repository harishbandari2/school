school.controller('viewCtrl',function ($scope, $http, $routeParams, $location){
  
    var url = $location.path().split('/');
    $scope.firstParameter = url[2];


    
        
    
    

    $http({
		    method : 'POST',
			url    : '/student/view',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson({rollno:$routeParams.id})
	}).then(function(response){
		$scope.data=response.data;
	},function(err){
		console.log('err');
	});



    
});