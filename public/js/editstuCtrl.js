school.controller('editstuCtrl',function ($scope, $http, $routeParams, $location){
  
    var url = $location.path().split('/');
    $scope.firstParameter = url[2];
    $scope.name="";
	$scope.addRmsg="";

    
        
    
    

    $http({
		    method : 'POST',
			url    : '/student/update',
			headers: {'Content-Type':'application/json'},
			data   : angular.fromJson({rollno:$routeParams.id})
	}).then(function(response){
        $scope.s=response.data;      
	},function(err){
		console.log('err');
	});


    $scope.editStudent = function(s){
        console.log("helloyoyo");

        var student = {
            name       : s.name,
            lastname   : s.lastname,
            rollno     : s.rollno,
            department : s.department,
            username   : s.username,
            password   : s.password,
            email      : s.email,
            contact_no : s.contact_no
            };
        
        $http({
            method : 'PUT',
            url    : '/student/updatenow',
            headers: {'Content-Type':'application/json'},
            data   : angular.fromJson(student)
        }).then(function(response){
            $scope.addRmsg="Successfully Added";
            s.name="";
            s.lastname="";
            s.rollno="";
            s.department="";
            s.username="";
            s.password="";
            s.email="";
            s.contact_no="";
        
        });
    }; 
    


    
});


