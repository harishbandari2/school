var school = angular.module('school',['ngRoute','appRoutes']);
school.controller('schoolCtrl',function ($rootScope,$location) {

	$rootScope.loc=$location.url();
});

school.run(function($rootScope,$location){
	$rootScope.$on("$locationChangeStart",function(event,next,current){
	$rootScope.loc=$location.url();
	});
});