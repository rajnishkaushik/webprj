/**
 * 
 */

app.directive("w3TestDirective", function() {
	return {
		restrict : "EACM",
		template : "<h1>Made by a directive!</h1>"
	};
});