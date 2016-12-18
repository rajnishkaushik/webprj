/**
 * 
 */

app.controller('myCtrl', function($scope, $http) {
	$http({
		method : "GET",
		url : "welcome.htm"
	}).then(function mySucces(response) {
		$scope.myWelcome = response.data;
	}, function myError(response) {
		$scope.myWelcome = response.statusText;
	});
});

app.controller("personCtrl", function($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
});

app.controller("namesCtrl", function($scope) {
	$scope.names = [ {
		name : 'Jani',
		country : 'Norway'
	}, {
		name : 'Carl',
		country : 'Sweden'
	}, {
		name : 'Margareth',
		country : 'England'
	}, {
		name : 'Hege',
		country : 'Norway'
	}, {
		name : 'Joe',
		country : 'Denmark'
	}, {
		name : 'Gustav',
		country : 'Sweden'
	}, {
		name : 'Birgit',
		country : 'Denmark'
	}, {
		name : 'Mary',
		country : 'England'
	}, {
		name : 'Kai',
		country : 'Norway'
	} ];

	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x;
	}
});

app.controller('customersCtrl', function($scope, $http) {
	$http.get("http://www.w3schools.com/angular/customers.php").then(function(response) {
		$scope.myData = response.data.records;
	});
});