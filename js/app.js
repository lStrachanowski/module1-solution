(function(){
'use strict';

var app = angular.module('MyApp',[]);

app.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
	$scope.inputText ="";
	$scope.displayMessage = function() {
		var txt = $scope.inputText;
		var meal = txt.split(',');
		cleanArray(meal);
		if(txt.length == 0){
			$scope.inputVal ="Please enter data first";			
			changeColor(false);
		}else if (meal.length <= 3 && meal.length > 0) {
			$scope.inputVal ="Enjoy";		
			changeColor(true);
		}else{
			$scope.inputVal ="Too much!";
			changeColor(true);
		}
	}
}
function cleanArray(arrayValue){
	for (var i = 0 ; i < arrayValue.length ; i++) {
		if (arrayValue[i] =="" || arrayValue[i] ==" "){
			arrayValue.splice(i,1);
		}
	}
}

function changeColor(boolean){
	var y = document.getElementsByClassName('form-control');
	var x = document.getElementsByClassName('message');
		if(boolean === true)
			{
				y[0].style.border = "1px solid green";
				x[0].style.color = "green";
			}else{
				y[0].style.border = "1px solid red";
				x[0].style.color = "red";
			}	
}
})();



