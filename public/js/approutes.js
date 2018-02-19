angular.module('appRoutes',[])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider

	.when('/',{
        templateUrl: 'views/register.html',
        controller : 'regCtrl'
		
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
	.when('/sview?id/',{
		templateUrl: 'views/studentdetail.html',
		controller : ''
	})

	.when('/login',{
		templateUrl: 'views/login.html',
		controller : 'loginCtrl'
		
	});
	
	$locationProvider.html5Mode(true);
}]);