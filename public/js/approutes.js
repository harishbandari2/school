angular.module('appRoutes',[])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider

	.when('/',{
        templateUrl: 'views/login.html',
        controller : 'loginCtrl'
		
	})
		.when('/studentdetails',{
		templateUrl: 'views/students.html',
		controller : 'studentCtrl'
	})
    .when('/tdashboard',{
		templateUrl: 'views/tdashboard.html',
		controller : ''
	})
	.when('/studentlist',{
		templateUrl: 'views/studentlist.html',
		controller : 'studentCtrl'
	})


	.when('/register',{
		templateUrl: 'views/register.html',
		controller : 'regCtrl'
	})
	.when('/addstudent',{
		templateUrl: 'views/addstudent.html',
		controller : 'studentCtrl'
	})
	.when('/view/:id',{
		templateUrl: 'views/studentdetail.html',
		controller : 'viewCtrl'
	})
	.when('/sedit/:id',{
		templateUrl: 'views/editstudent.html',
		controller : 'editstuCtrl'
	})

	.when('/login',{
		templateUrl: 'views/login.html',
		controller : 'loginCtrl'
		
	});
	
	$locationProvider.html5Mode(true);
}]);