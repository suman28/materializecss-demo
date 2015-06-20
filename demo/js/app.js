$(document).ready(function(){
				    $('.materialboxed').materialbox();
				     $('.slider').slider({full_width: true});
				     $('.modal-trigger').leanModal();

				  });
angular.module('testApp', ['fsm','ui.slimscroll']);
/*angular.module('testApp').config(['$routeProvider',
			  function($routeProvider) {
			    $routeProvider.
			      when('/home', {
			        templateUrl: 'home.html',
			        
			      }).
			      when('/about', {
			        templateUrl: 'aboutUs.html',
			        
			      }).
			      otherwise({
			        redirectTo: '/home'
			      });
			  }]);*/
angular.module('testApp').controller('testController', ['$scope', function($scope) {
					
					var data = [];
					$scope.test = { };
					$scope.getModal = function(){
						$('#modal1').openModal();
					}

					for (var i = 1; i <= 100000; i++){
						data.push({ 
							id: i, 
							column1: "column 1 data " + i,
							column2: "column 2 data " + i,
							longText: "This is some really long text so it doesn't fit " + i
						});
					};
					$scope.test.data = data;
				}]
			);
				// Back to top Directive
 
/*angular.module('testApp').directive('backToTop', function(){
 
	return {
		restrict: 'E'
		, replace: true
		, template: '<div class="back-to-top"><i class="fa fa-chevron-up"></i></div>'
		, link: function($scope, element, attrs) {
 
			$(window).scroll(function(){
 
				if ($(window).scrollTop() <= 0) {
					$(element).fadeOut();
				}
				else {
					$(element).fadeIn();
				}
 
			});
 
			$(element).on('click', function(){
				$('html, body').animate({ scrollTop: 0 }, 'fast');
			});
 
		}
	}

})*/ 
			