/* global moment */
/* global angular */
'use strict';

var directives = directives || angular.module('PortfolioWebsite.directives', []);

directives.directive('leftColumn', function(){

	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/app/views/templates/leftColumn.html',
		link: function(scope, element, attrs) {

		}
	};

});